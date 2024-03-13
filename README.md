*db.js*

// Import the required MongoClient class from the 'mongodb' package
import { MongoClient } from 'mongodb';

// Define default values for host, port, and database name if environment variables are not set
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';

// Construct the MongoDB connection URL using the host and port
const url = `mongodb://${host}:${port}/`;

// Define a class named DBClient to interact with the MongoDB database
class DBClient {
  constructor() {
    // Initialize the 'db' property to null
    this.db = null;

    // Connect to the MongoDB database using the MongoClient
    MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
      // Handle any connection errors
      if (error) console.log(error);
      
      // If connection is successful, assign the database client to the 'db' property
      this.db = client.db(database);
      
      // Create 'users' and 'files' collections if they do not exist
      this.db.createCollection('users');
      this.db.createCollection('files');
    });
  }

  // Method to check if the database connection is alive
  isAlive() {
    return !!this.db;
  }

  // Asynchronous method to get the number of users in the 'users' collection
  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  // Asynchronous method to retrieve a user document based on the provided query
  async getUser(query) {
    console.log('QUERY IN DB.JS', query);
    const user = await this.db.collection('users').findOne(query);
    console.log('GET USER IN DB.JS', user);
    return user;
  }

  // Asynchronous method to get the number of files in the 'files' collection
  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

// Create an instance of the DBClient class to interact with the database
const dbClient = new DBClient();

// Export the dbClient instance as the default export of the module
export default dbClient;





***server.js***
// Importing the necessary modules and functions
import express from 'express';
import controllerRouting from './routes/index';

// Creating an instance of Express app
const app = express();

// Defining the port number from environment variables or using a default value
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Routing configuration using controller functions
controllerRouting(app);

// Starting the Express app and listening on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporting the Express app for testing or reuse
export default app;



***AppController.js***
// Import required modules and utilities
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

// Define the AppController class
class AppController {
  // Method to handle the 'GET /status' endpoint
  static getStatus(request, response) {
    try {
      // Check if Redis and database connections are alive
      const redis = redisClient.isAlive();
      const db = dbClient.isAlive();
      
      // Send a JSON response with the status of Redis and database connections
      response.status(200).send({ redis, db });
    } catch (error) {
      // Log any errors that occur during execution
      console.log(error);
    }
  }

  // Method to handle the 'GET /stats' endpoint
  static async getStats(request, response) {
    try {
      // Get the number of users and files from the database asynchronously
      const users = await dbClient.nbUsers();
      const files = await dbClient.nbFiles();
      
      // Send a JSON response with the number of users and files
      response.status(200).send({ users, files });
    } catch (error) {
      // Log any errors that occur during execution
      console.log(error);
    }
  }
}

// Export the AppController class as the default export of the module
export default AppController;


***index.js***
// Import the required modules and controllers
import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

// Create a new router instance
const router = express.Router();

// Define the routeController function to configure routes and attach controllers to them
const routeController = (app) => {
  // Mount the router at the root path '/'
  app.use('/', router);

  // Define routes and attach corresponding controller methods
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });

  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });

  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });

  router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });

  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });

  router.put('/files/:id/publish', (req, res) => {
    FilesController.putPublish(req, res);
  });

  router.put('/files/:id/unpublish', (req, res) => {
    FilesController.putUnpublish(req, res);
  });

  router.post('/files/:id/data', (req, res) => {
    FilesController.getFile(req, res);
  });
};

// Export the routeController function as the default export of the module
export default routeController;

***AuthController.js***
import sha1 from 'sha1';
import { v4 as uuidv4 } from 'uuid';
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

// Define the AuthController class
class AuthController {
  // Method to handle the 'GET /connect' endpoint
  static async getConnect(request, response) {
    // Extract the Authorization header from the request
    const authHeader = request.headers.authorization;
    // If Authorization header is missing, send an unauthorized response
    if (!authHeader) {
      response.status(401).json({ error: 'Unauthorized' });
    }
    try {
      // Decode the base64-encoded authorization header to extract email and password
      const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
      const email = auth[0];
      const pass = sha1(auth[1]);

      // Retrieve user information from the database using the email
      const user = await dbClient.getUser({ email });

      // If user does not exist/password does not match, send an unauthorized response
      if (!user || pass !== user.password) {
        response.status(401).json({ error: 'Unauthorized' });
      }

      // Generate a unique token using UUIDv4
      const token = uuidv4();
      const key = `auth_${token}`;
      const duration = (60 * 60 * 24); // Token expiration duration (24 hours)
      
      // Store the token-user mapping in Redis cache with expiration
      await redisClient.set(key, user._id.toString(), duration);

      // Send a success response with the generated token
      response.status(200).json({ token });
    } catch (err) {
      // Log any errors that occur during execution and send a server error response
      console.log(err);
      response.status(500).json({ error: 'Server error' });
    }
  }

  // Method to handle the 'GET /disconnect' endpoint
  static async getDisconnect(request, response) {
    try {
      // Extract the user token from the request header
      const userToken = request.header('X-Token');
      // Retrieve the user ID associated with the token from Redis cache
      const userKey = await redisClient.get(`auth_${userToken}`);
      
      // If user token is invalid/not found in cache, send an unauthorized response
      if (!userKey) {
        response.status(401).json({ error: 'Unauthorized' });
      }
      
      // Delete the token-user mapping from Redis cache
      await redisClient.del(`auth_${userToken}`);
      
      // Send a success response indicating disconnection
      response.status(204).send('Disconnected');
    } catch (err) {
      // Log any errors that occur during execution and send a server error response
      console.log(err);
      response.status(500).json({ error: 'Server error' });
    }
  }
}

// Export the AuthController class as the default export of the module
export default AuthController;


***FilesController.js***
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


***UsersController.js***
import sha1 from 'sha1';
import { ObjectId } from 'mongodb';
import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class UsersController {
  // Method to handle the 'POST /users' endpoint
  static async postNew(request, response) {
    // Extract email and password from the request body
    const { email, password } = request.body;

    // Check if email and password are provided
    if (!email) {
      response.status(400).json({ error: 'Missing email' });
    }
    if (!password) {
      response.status(400).json({ error: 'Missing password' });
    }

    // Hash the password using SHA1 algorithm
    const hashPwd = sha1(password);

    try {
      // Access the 'users' collection from the database
      const collection = dbClient.db.collection('users');
      // Check if a user with the same email already exists
      const existingUser = await collection.findOne({ email });

      // If user already exists, return an error response
      if (existingUser) {
        response.status(400).json({ error: 'Already exist' });
      } else {
        // Insert the new user into the database
        collection.insertOne({ email, password: hashPwd });
        // Retrieve the newly inserted user
        const newUser = await collection.findOne({ email }, { projection: { email: 1 } });
        // Send a success response with the user ID and email
        response.status(201).json({ id: newUser._id, email: newUser.email });
      }
    } catch (error) {
      // Log any errors that occur during execution and send a server error response
      console.log(error);
      response.status(500).json({ error: 'Server error' });
    }
  }

  // Method to handle the 'GET /users/me' endpoint
  static async getMe(request, response) {
    try {
      // Extract the user token from the request header
      const userToken = request.header('X-Token');
      const authKey = `auth_${userToken}`;
      
      // Retriev user ID from Redis cache using d authentication key
      const userID = await redisClient.get(authKey);
      
      // If user ID is not found in Redis, send:unauthorized response
      if (!userID) {
        response.status(401).json({ error: 'Unauthorized' });
      }

      // Retrieve user information from database using the user ID
      const user = await dbClient.getUser({ _id: ObjectId(userID) });
      
      // Send a JSON response with the user ID and email
      response.json({ id: user._id, email: user.email });
    } catch (error) {
      // Log errors & send a server error response
      console.log(error);
      response.status(500).json({ error: 'Server error' });
    }
  }
}

// Export d UsersController class as d default export of d module
export default UsersController;
