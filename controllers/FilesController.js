// Import required modules and utilities
import Queue from 'bull';
import { ObjectId } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { mkdir, writeFile, readFileSync } from 'fs';
import mime from 'mime-types';
import dbClient from '../utils/db';
import { getIdAndKey, isValidUser } from '../utils/users';

// Define the FilesController class
class FilesController {
  // Method to handle the 'POST /files' endpoint for uploading files
  static async postUpload(request, response) {
    // Create a new Bull queue instance for file processing
    const fileQ = new Queue('fileQ');
    // Define the directory path for storing uploaded files
    const dir = process.env.FOLDER_PATH || '/tmp/files_manager';

    // Retrieve user ID from request headers
    const { userId } = await getIdAndKey(request);
    // If user is not valid, send an unauthorized response
    if (!isValidUser(userId)) return response.status(401).send({ error: 'Unauthorized' });

    // Retrieve user information from the database using user ID
    const user = await dbClient.users.findOne({ _id: ObjectId(userId) });
    // If user does not exist, send an unauthorized response
    if (!user) return response.status(401).send({ error: 'Unauthorized' });

    // Extract file details from the request body
    const { name: fileName, type: fileType, data: fileData } = request.body;
    // If required file details are missing, send a bad request response
    if (!fileName || !fileType || !['folder', 'file', 'image'].includes(fileType)) return response.status(400).send({ error: 'Missing or invalid file details' });
    if (!fileData && fileType !== 'folder') return response.status(400).send({ error: 'Missing file data' });

    // Extract additional parameters from the request body
    const publicFile = request.body.isPublic || false;
    let parentId = request.body.parentId || 0;
    parentId = parentId === '0' ? 0 : parentId;

    // If parent ID is provided, validate parent file existence and type
    if (parentId !== 0) {
      const parentFile = await dbClient.files.findOne({ _id: ObjectId(parentId) });
      if (!parentFile) return response.status(400).send({ error: 'Parent file not found' });
      if (parentFile.type !== 'folder') return response.status(400).send({ error: 'Parent is not a folder' });
    }

    // Construct the file insertion data
    const fileInsertData = {
      userId: user._id,
      name: fileName,
      type: fileType,
      isPublic: publicFile,
      parentId
    };

    // If file type is 'folder', directly insert the data into the database
    if (fileType === 'folder') {
      await dbClient.files.insertOne(fileInsertData);
      // Send a success response with the inserted file details
      return response.status(201).send(fileInsertData);
    }

    // Generate a unique UUID for the file
    const fileUid = uuidv4();
    // Decode base64-encoded file data
    const decData = Buffer.from(fileData, 'base64');
    // Define the file path
    const filePath = `${dir}/${fileUid}`;

    // Create the directory if it doesn't exist
    mkdir(dir, { recursive: true }, (error) => {
      if (error) return response.status(400).send({ error: error.message });
    });

    // Write the file to the disk
    writeFile(filePath, decData, (error) => {
      if (error) return response.status(400).send({ error: error.message });
    });

    // Update file insertion data with local file path
    fileInsertData.localPath = filePath;
    // Insert file data into the database
    await dbClient.files.insertOne(fileInsertData);

    // Add a job to the file processing queue
    fileQ.add({
      userId: fileInsertData.userId,
      fileId: fileInsertData._id
    });

    // Send a success response with the inserted file details
    return response.status(201).send(fileInsertData);
  }

  // Method to handle the 'GET /files/:id' endpoint for retrieving file details
  static async getShow(request, response) {
    // Retrieve user ID from request headers
    const { userId } = await getIdAndKey(request);
    // If user is not valid, send an unauthorized response
    if (!isValidUser(userId)) return response.status(401).send({ error: 'Unauthorized' });

    // Retrieve user information from the database using user ID
    const user = await dbClient.users.findOne({ _id: ObjectId(userId) });
    // If user does not exist, send an unauthorized response
    if (!user) return response.status(401).send({ error: 'Unauthorized' });

    // Extract file ID from the request parameters
    const fileId = request.params.id || '';
    // Find the file in the database based on file ID and user ID
    const file = await dbClient.files.findOne({ _id: ObjectId(fileId), userId: user._id });
    // If file does not exist or user does not have access, send a not found response
    if (!file) return response.status(404).send({ error: 'Not found' });

    // Send a success response with the retrieved file details
    return response.status(200).send(file);
  }

  // Method to handle the 'GET /files' endpoint for retrieving file index
  static async getIndex(request, response) {
    // Retrieve user ID from request headers
    const { userId } = await getIdAndKey(request);
    // If user is not valid, send an unauthorized response
    if (!isValidUser(userId)) return response.status(401).send({ error: 'Unauthorized' });

    // Retrieve user information from the database using user ID
    const user = await dbClient.users.findOne({ _id: ObjectId(userId) });
    // If user does not exist, send an unauthorized response
    if (!user) return response.status(401).send({ error: 'Unauthorized' });

    // Extract parent ID from query parameters
    let parentId = request.query.parentId || 0;
    parentId = parentId === '0' ? 0 : ObjectId(parentId);

    // If parent ID is provided, validate parent file existence and type
    if (parentId !== 0) {
      const folder = await dbClient.files.findOne({ _id: parentId });
      if (!folder || folder.type !== 'folder') return response.status(200).send([]);
    }

    // Extract page number from query parameters
    const page = request.query.page || 0;

    // Define the aggregation pipeline based on parent ID and pagination
    const agg = parentId !== 0 ? { $and: [{ parentId }] } : {};
    let aggData = parentId !== 0 ? [{ $match: agg }, { $skip: page * 20 }, { $limit: 20 }] : [{ $skip: page * 20 }, { $limit: 20 }];

    // Execute the aggregation query to fetch page files
    const pageFiles = await dbClient.files.aggregate(aggData);
    const files = [];

    // Iterate over page files and construct file objects
    await pageFiles.forEach((file) => {
      const fileObj = {
        id: file._id,
        userId: file.userId,
        name: file.name,
        type: file.type,
        isPublic: file.isPublic,
        parentId: file.parentId
      };
      files.push(fileObj);
    });

    // Send a success response with the retrieved file index
    return response.status(200).send(files);
  }

  // Method to handle the 'PUT /files/:id/publish' endpoint for publishing a file
  static async putPublish(request, response) {
    // Retrieve user ID from request headers
    const { userId } = await getIdAndKey(request);
    // If user is not valid, send an unauthorized response
    if (!isValidUser(userId)) return response.status(401).send({ error: 'Unauthorized' });

    // Retrieve user information from the database using user ID
    const user = await dbClient.users.findOne({ _id: ObjectId(userId) });
    // If user does not exist, send an unauthorized response
    if (!user) return response.status(401).send({ error: 'Unauthorized' });

    // Extract file ID from the request parameters
    const fileId = request.params.id || '';

    // Find the file in the database based on file ID and user ID
    let file = await dbClient.files.findOne({ _id: ObjectId(fileId), userId: user._id });
    // If file does not exist or user does not have access, send a not found response
    if (!file) return response.status(404).send({ error: 'Not found' });

    // Update the file's 'isPublic' field to true
    await dbClient.files.updateOne({ _id: ObjectId(fileId) }, { $set: { isPublic: true } });
    // Retrieve the updated file from the database
    file = await dbClient.files.findOne({ _id: ObjectId(fileId), userId: user._id });

    // Send a success response with the updated file details
    return response.status(200).send(file);
  }

  // Method to handle the 'PUT /files/:id/unpublish' endpoint for unpublishing a file
  static async putUnpublish(request, response) {
    // Retrieve user ID from request headers
    const { userId } = await getIdAndKey(request);
    // If user is not valid, send an unauthorized response
    if (!isValidUser(userId)) return response.status(401).send({ error: 'Unauthorized' });

    // Retrieve user information from the database using user ID
    const user = await dbClient.users.findOne({ _id: ObjectId(userId) });
    // If user does not exist, send an unauthorized response
    if (!user) return response.status(401).send({ error: 'Unauthorized' });

    // Extract file ID from the request parameters
    const fileId = request.params.id || '';

    // Find the file in the database based on file ID and user ID
    let file = await dbClient.files.findOne({ _id: ObjectId(fileId), userId: user._id });
    // If file does not exist or user does not have access, send a not found response
    if (!file) return response.status(404).send({ error: 'Not found' });

    // Update the file's 'isPublic' field to false
    await dbClient.files.updateOne({ _id: ObjectId(fileId) }, { $set: { isPublic: false } });
    // Retrieve the updated file from the database
    file = await dbClient.files.findOne({ _id: ObjectId(fileId), userId: user._id });

    // Send a success response with the updated file details
    return response.status(200).send(file);
  }

  // Method to handle the 'POST /files/:id/data' endpoint for retrieving file data
  static async getFile(request, response) {
    // Extract file ID and size from request parameters and query parameters
    const fileId = request.params.id || '';
    const size = request.query.size || 0;

    // Find the file in the database based on file ID
    const file = await dbClient.files.findOne({ _id: ObjectId(fileId) });
    // If file does not exist, send a not found response
    if (!file) return response.status(404).send({ error: 'Not found' });

    // Extract file properties
    const { isPublic, userId, type } = file;

    // Retrieve user ID from request headers
    const { userId: user } = await getIdAndKey(request);

    // If user is not authorized to access the file, send a not found response
    if ((!isPublic && !user) || (user && userId.toString() !== user && !isPublic)) return response.status(404).send({ error: 'Not found' });
    // If file type is 'folder', send a bad request response
    if (type === 'folder') return response.status(400).send({ error: 'A folder doesn\'t have content' });

    // Define the file path based on the requested size
    const path = size === 0 ? file.localPath : `${file.localPath}_${size}`;

    try {
      // Read the file data from the disk
      const fileData = readFileSync(path);
      // Determine the MIME type of the file
      const mimeType = mime.contentType(file.name);
      // Set the Content-Type header in the response
      response.setHeader('Content-Type', mimeType);
      // Send a success response with the file data
      return response.status(200).send(fileData);
    } catch (err) {
      // If an error occurs while reading the file, send a not found response
      return response.status(404).send({ error: 'Not found' });
    }
  }
}

// Export the FilesController class
export default FilesController;

