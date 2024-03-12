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
