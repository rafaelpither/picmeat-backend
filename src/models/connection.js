import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: process.env.DB_HOST || "picmeat-backend.onrender.com",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "12345",
  database: process.env.DB_NAME || "carnes"
});

module.exports = connection;