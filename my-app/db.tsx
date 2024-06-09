// db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database user
  password: 's1i2d3raman', // Replace with your database password
  database: 'stepfulDB', // Replace with your database name
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});

export default pool;