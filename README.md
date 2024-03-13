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

