const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let result = '';
  const {
    query: { id },
  } = req;
  switch (req.method) {
    case 'GET':
      query = `SELECT id, header, Contents, subheaders, images, publish_date, author, section, description from articles where id=${id};`;
      result = await dbQuery(query);
      break;
    default:
      res.status(403);
      res.end();
  }
  res.send(result);
};