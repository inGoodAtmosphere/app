const dbQuery = require('../../../api_modules/dbQuery');

export default async (req, res) => {
  const user = await dbQuery.findUser('esrech@gmail.com', (err) => {
    if (err) res.send(err);
  });
  res.send(user);
};
