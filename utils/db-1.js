import { MongoClient } from 'mongodb';

// Define default connection parameters or read from environment variables
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${host}:${port}/`;

// Define a class for database operations
class DBClient {
  constructor() {
    // Initialize database connection
    this.db = null;
    MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
      if (error) console.log(error);
      // Assign database instance to 'db' property
      this.db = client.db(database);
      // Create 'users' and 'files' collections if they do not exist
      this.db.createCollection('users');
      this.db.createCollection('files');
    });
  }

  // Check if the database connection is alive
  isAlive() {
    return !!this.db;
  }

  // Get the number of users in the database
  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  // Get a user from the database based on the query
  async getUser(query) {
    console.log('QUERY IN DB.JS', query);
    const user = await this.db.collection('users').findOne(query);
    console.log('GET USER IN DB.JS', user);
    return user;
  }
  // Get the number of files in the database
  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
