const dbQuery = require('../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let result = '';
  switch (req.method) {
    case 'GET':
      query = ``;
      result = await dbQuery(query);
      break;
    case 'POST':
      query = ``;
      result = await dbQuery(query);
      break;
    default:
      res.status(403);
      res.end();
  }
  res.send(result);
};
