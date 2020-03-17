const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  const {
    query: { id },
  } = req;
  const query =
  `SELECT ID, measurement_datetime , humidity ,temperature ,pm1 , pm25 ,pm10  FROM measurements WHERE device_id=${id};`;
  const result = await dbQuery(query);
  res.send(result);  
};
