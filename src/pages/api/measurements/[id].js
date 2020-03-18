const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  const {
    query: { id },
  } = req;
  const query = `SELECT ID, measurement_date, avg(humidity) ,avg(temperature) ,avg(pm1) , avg(pm25) ,avg(pm10)  FROM measurements WHERE device_id=${id} GROUP BY measurement_date;`;
  const result = await dbQuery(query);
  res.send(result);
};
