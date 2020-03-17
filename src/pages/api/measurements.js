const dbQuery = require('../../../api_modules/selectQuery');

export default async (req, res) => {
  const query =
    'Select m.id, m.device_id, m.measurement_datetime, m.humidity, m.temperature, m.pm1, m.pm25, m.pm10 from measurements as m INNER JOIN (SELECT max(id) as id, `device_id` FROM `measurements` GROUP BY device_id ORDER BY `measurements`.`device_id` ASC) as maxId on maxId.id=m.id ORDER BY `device_id` ASC;';
  const result = await dbQuery(query);
  res.send(result);
};
