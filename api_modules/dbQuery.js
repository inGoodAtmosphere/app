require('dotenv').config();
const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER3,
    password: process.env.DB_PASSWORD,
  },
});

const queryExecute = async (queryContent) => {
  let results = await mysql.query(queryContent);
  await mysql.end();
  return results;
};

module.exports = queryExecute;
module.exports.escape = mysql.escape;
module.exports.escapeId = mysql.escapeId;
// module.exports.escape = (anything) => anything;
