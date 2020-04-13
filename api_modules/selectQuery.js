const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 11,
  host: process.env.DB_HOST,
  user: process.env.DB_USER3,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const query = (queryContent) =>
  new Promise((resolve, reject) => {
    // making query - pool.query() is shorthand which connects, makes query and releases poolConnection at once
    pool.query(queryContent, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

module.exports = query;
module.exports.escape = mysql.escape;
module.exports.escapeId = mysql.escapeId;
// module.exports.escape = (anything) => anything;
