const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let result = '';
  const {
    query: { name },
  } = req;
  switch (req.method) {
    case 'GET':
      query = `SELECT id, header, Contents, subheaders as subHeaders, images, publish_date as publishDate, author, section, description from articles where section=${dbQuery.escape(name)};`;
      result = await dbQuery(query);
      break;
    default:
      res.status(403);
      res.end();
  }
  res.send(result);
};
