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
  // 'Select m.id, m.device_id, m.measurment_datetime, m.humidity, m.temperature, m.pm1, m.pm2_5, m.pm10 from measurments as m INNER JOIN (SELECT max(id) as id, `device_id` FROM `measurments` GROUP BY device_id ORDER BY `measurments`.`device_id` ASC) as maxId on maxId.id=m.id ORDER BY `device_id` ASC;'
  const queryContent =
    'Select m.id, m.device_id, m.measurement_datetime, m.humidity, m.temperature, m.pm1, m.pm25, m.pm10 from measurements as m INNER JOIN (SELECT max(id) as id, `device_id` FROM `measurements` GROUP BY device_id ORDER BY `measurements`.`device_id` ASC) as maxId on maxId.id=m.id ORDER BY `device_id` ASC;';
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
