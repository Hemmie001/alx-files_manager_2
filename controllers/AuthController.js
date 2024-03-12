
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
