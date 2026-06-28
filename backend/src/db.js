// Import the PostgreSQL connection pool
const { Pool } = require("pg");

// Load environment variables from the .env file
require("dotenv").config();

// Create a connection pool to the PostgreSQL database
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Export the pool so it can be used throughout the application
module.exports = pool;