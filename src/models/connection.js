import { createConnection } from "mysql2";

const db = createConnection({
  host: process.env.DB_HOST || "picmeat-backend.onrender.com",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "12345",
  database: process.env.DB_NAME || "carnes"
});

export default db;