const dbQuery = require('../../../api_modules/dbQuery');

// TODO add catch error
export default async (req, res) => {
  if (req.method === 'GET') {
    const query = 'select content from interesting_facts;';
    const factsArray = await dbQuery(query);
    const randomNumb = Math.floor(Math.random() * factsArray.length);
    res.json(factsArray[randomNumb]);
  } else {
    res.status(403);
    res.end();
  }
};
