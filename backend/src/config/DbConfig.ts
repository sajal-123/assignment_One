const { Client } = require('pg');

// Your PostgreSQL connection URL
const connectionString = process.env.DATABASE_URL;

// Create a new client instance
const client = new Client({
  connectionString: connectionString,
});

export {client}
