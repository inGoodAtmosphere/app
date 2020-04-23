import dbQuery from './dbQuery';

export default async (email, callback) => {
  if (email === '') {
    callback(null);
    return null;
  }
  const query = `select id,email, login, password, 'first-name' as firstName, 'last-name' as lastName, permissions, newsletter, signup_date as signupDate, status from users where email = ${dbQuery.escape(
    email,
  )}; `;
  const result = await dbQuery(query).catch((error) => {
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

export const findUserById = async (id, callback) => {
  const query = `select id,email, login, password, 'first-name' as firstName, 'last-name' as lastName, permissions, newsletter, signup_date as signupDate, status from users where id = ${dbQuery.escape(
    id,
  )}; `;
  const result = await dbQuery(query).catch((error) => {
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
