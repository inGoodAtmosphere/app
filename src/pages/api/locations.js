const dbQuery = require('../../../api_modules/selectQuery');

export default async (req, res) => {
  const query =
    'SELECT `id`,`Location_Latitude` as lat,`Location_Longitude` as lng from devices limit 50';
  const result = await dbQuery(query);
  res.send(result);
};

