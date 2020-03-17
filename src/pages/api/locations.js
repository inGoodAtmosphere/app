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
    'SELECT `id`,`Location_Latitude` as lat,`Location_Longitude` as lng from devices limit 50';
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
