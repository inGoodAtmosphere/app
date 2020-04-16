const bcrypt = require('bcrypt');
const dbQuery = require('../../../api_modules/dbQuery');

export default async (req, res) => {
  const user = await dbQuery
    .findUser('esrech@gmail.com', (err) => {
      if (err) res.send(err);
    })
    .then();

  const user2 = await dbQuery.findUser('', (err) => {
    if (err) res.send(err);
  });
  let password1;
  let password2;
  let password3;
  await bcrypt.compare('zaq1@WSX', user.password1, async (err, isMatch) => {
    if (err) console.log(err);
    password1 = await isMatch;
  });
  await bcrypt.compare('', user.password2, async (err, isMatch) => {
    if (err) console.log(err);
    password2 = await isMatch;
  });
  await bcrypt.compare('', user.password1, async (err, isMatch) => {
    if (err) console.log(err);
    password3 = await isMatch;
  });
  if (!!password1 && !!password2 && !!password3) {
    res.json([
      { password1, user },
      { password2, password3, user2 },
    ]);
  }
};
