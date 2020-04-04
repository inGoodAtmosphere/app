const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let result = '';
  const {
    query: { header },
  } = req;
  switch (req.method) {
    case 'GET':
      query = `SELECT id, header, contents, subheaders as subHeaders, images, publish_date as publishDate, author, section, description from articles where link=${dbQuery.escape(
        header,
      )};`;
      result = await dbQuery(query);
      break;
    default:
      res.status(403);
      res.end();
  }
  res.send(result);
};
