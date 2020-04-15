const mysql = require('mysql');
require('dotenv').config();
// TODO MAKE CLASS WITH USER

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER3,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const queryExecute = (queryContent) =>
  new Promise((resolve, reject) => {
    // making query - pool.query() is shorthand which connects, makes query and releases poolConnection at once
    pool.query(queryContent, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

const findUserByEmail = async (email, callback) => {
  const query = `select id,email, login, password, 'first-name' as firstName, 'last-name' as lastName, permissions, newsletter, signup_date as signupDate, status from users where email = ${mysql.escape(
    email,
  )}; `;
  const result = await queryExecute(query).catch((error) => {
    if (error) callback(error);
  });
  if (!result) {
    callback(null);
    return null;
  }
  if (result.length > 1) {
    console.log('error in db');
    callback(new Error('Error while making a query'));
  }
  callback(null);
  return result[0];
};
const findUserById = async (id, callback) => {
  const query = `select id,email, login, password, 'first-name' as firstName, 'last-name' as lastName, permissions, newsletter, signup_date as signupDate, status from users where id = ${mysql.escape(
    id,
  )}; `;
  const result = await queryExecute(query).catch((error) => {
    if (error) callback(error);
  });
  if (!result) {
    callback(null);
    return null;
  }
  if (result.length > 1) {
    console.log('error in db');
    callback(new Error('Error while making a query'));
  }
  callback(null);
  return result[0];
};
module.exports = queryExecute;
module.exports = { findUserById };
module.exports.escape = mysql.escape;
module.exports.escapeId = mysql.escapeId;
module.exports.findUser = findUserByEmail;
// module.exports.escape = (anything) => anything;
