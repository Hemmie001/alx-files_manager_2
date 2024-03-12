// App Controller
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  // Method to handle the 'GET /status' endpoint
  static getStatus(request, response) {
    try {
      // Check if Redis and database connections are alive
      const redis = redisClient.isAlive();
      const db = dbClient.isAlive();
      
      // Send a JSON response with d status of Redis & database connections
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
