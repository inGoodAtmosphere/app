const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql39.mydevil.net',
  user: 'm1307_test',
  password: 'G00Dgood2137',
  database: 'm1307_test',
});

const query = (queryContent) =>
  new Promise((resolve, reject) => {
    // Connecting to database
    db.connect((error) => {
      if (error) {
        reject(error);
      } else {
        console.log('connected');
      }
    });
    // making query
    db.query(queryContent, (err, result) => {
      if (err) {
        reject(err);
        //   throw err;
      } else {
        db.end(); // closing connection with database
        resolve(result);
      }
    });
  });

module.exports = query;
