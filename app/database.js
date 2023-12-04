// database.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '34.101.60.35',
  user: 'root',
  password: 'root4995',
  database: 'feedpicker_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection()
  .then((connection) => {
    console.log('Connected to the database!');
    connection.release();
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message);
  });

module.exports = pool;
