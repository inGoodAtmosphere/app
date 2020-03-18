const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'mysql39.mydevil.net',
  user: 'm1307_test',
  password: 'G00Dgood2137',
  database: 'm1307_test',
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
