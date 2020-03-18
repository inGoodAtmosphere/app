const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  const {
    query: { id },
  } = req;
  const query = `SELECT ID as id, measurement_date as measurementDate, round(avg(humidity)) as humidity ,round(avg(temperature)) as temperature ,round(avg(pm1)) as pm1, round(avg(pm25)) as 'pm2.5' ,round(avg(pm10)) as pm10  FROM measurements WHERE device_id=${id} GROUP BY measurement_date;`;
  const result = await dbQuery(query);
  res.send(result);
};
