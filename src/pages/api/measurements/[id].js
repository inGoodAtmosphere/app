const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let result = '';
  const {
    query: { id },
  } = req;
  switch (req.method) {
    case 'GET':
      query = `SELECT ID as id, measurement_date as measurementDate, round(avg(humidity)) as humidity ,round(avg(temperature)) as temperature ,round(avg(pm1)) as pm1, round(avg(pm25)) as 'pm2.5' ,round(avg(pm10)) as pm10  FROM measurements WHERE device_id=${id} GROUP BY measurement_date;`;
      result = await dbQuery(query);
      break;
    case 'POST':
      query = `INSERT INTO measurements(device_id,measurement_date, measurement_time, receive_date,receive_time, humidity, temperature, pm1,pm25,pm10) values(${id},${req.body.measurementDate},${req.body.measurementTime},CURRENT_DATE, CURRENT_TIME, ${req.body.humidity},${req.body.temperature},${req.body.pm1},${req.body.pm25},${req.body.pm10})`;
      result = await dbQuery(query);
      break;
    default:
      res.status(403);
      res.end();
  }
  res.send(result);
};
