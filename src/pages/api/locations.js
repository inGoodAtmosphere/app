const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql39.mydevil.net',
  user: 'm1307_test',
  password: 'G00Dgood2137',
  database: 'm1307_test',
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

export default (req, res) => {
  const queryContent =
    'SELECT `ID`,`Location_Latitude`,`Location_Longitude` from devices';
  db.query(queryContent, (err, result) => {
    if (err) {
      res.json({
        message: 'error while making a query',
      });
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
