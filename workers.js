import DBClient from './utils/db';

// Import necessary libraries
const Bull = require('bull');
const { ObjectId } = require('mongodb');
const imageThumbnail = require('image-thumbnail');
const fs = require('fs');

// Create Bull queues for file processing and user processing
const fileQueue = new Bull('fileQueue');
const userQueue = new Bull('userQueue');

// Function to create image thumbnail
const createImageThumbnail = async (path, options) => {
  try {
    // Generate thumbnail using image-thumbnail library
    const thumbnail = await imageThumbnail(path, options);
    // Define path for thumbnail with specified width
    const pathNail = `${path}_${options.width}`;

    // Write thumbnail to disk
    await fs.writeFileSync(pathNail, thumbnail);
  } catch (error) {
    // Handle any errors that occur during thumbnail creation
    console.log(error);
  }
};

// Process fileQueue jobs
fileQueue.process(async (job) => {
  // Extract fileId and userId from job data
  const { fileId } = job.data;
  if (!fileId) throw Error('Missing fileId');

  const { userId } = job.data;
  if (!userId) throw Error('Missing userId');

  // Retrieve file document from the database
  const fileDocument = await DBClient.db.collection('files').findOne({ _id: ObjectId(fileId), userId: ObjectId(userId) });
  if (!fileDocument) throw Error('File not found');

  // Generate thumbnails for different widths
  createImageThumbnail(fileDocument.localPath, { width: 500 });
  createImageThumbnail(fileDocument.localPath, { width: 250 });
  createImageThumbnail(fileDocument.localPath, { width: 100 });
});

// Process userQueue jobs
userQueue.process(async (job) => {
  // Extract userId from job data
  const { userId } = job.data;
  if (!userId) throw Error('Missing userId');

  // Retrieve user document from the database
  const userDocument = await DBClient.db.collection('users').findOne({ _id: ObjectId(userId) });
  if (!userDocument) throw Error('User not found');

  // Log a welcome message for the user
  console.log(`Welcome ${userDocument.email}`);
});
