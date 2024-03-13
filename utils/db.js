import { MongoClient } from 'mongodb';

// Define default values for host, port, and database name if environment variables are not set
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${host}:${port}/`;

// Define a class named DBClient to interact with the MongoDB database
class DBClient {
  constructor() {
    // Initialize the 'db' property to null
    this.db = null;
    // Connect to the MongoDB database using the MongoClient
    MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
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
