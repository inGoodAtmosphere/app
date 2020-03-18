const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  const {
    query: { id },
  } = req;
  const query = `SELECT ID as id, measurement_date as measurementDate, avg(humidity) as humidity ,avg(temperature) as temerature ,avg(pm1) as pm1, avg(pm25) as 'pm2.5' ,avg(pm10) as pm10  FROM measurements WHERE device_id=${id} GROUP BY measurement_date;`;
  const result = await dbQuery(query);
  res.send(result);
};
