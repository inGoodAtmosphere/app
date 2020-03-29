const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let queryTest = '';
  let result = '';
  let checkIfAdressRegistered = {};
  const {
    query: { adress },
  } = req;
  const adressDecrypted = adress; // .replace(/U/g, 'F').replace(/V/g, 'E').replace(/W/g, 'D').replace(/X/g, 'C').replace(/Y/g, 'B').replace(/Z/g, 'A');
  switch (req.method) {
    case 'POST':
      if (adress.length !== 17) {
        res.json({ error: 'wrong input' });
      } else {
        query = `select id from devices where Macadress=${dbQuery.escape(
          adressDecrypted,
        )}`;
        checkIfAdressRegistered = await dbQuery(query);
        if (checkIfAdressRegistered.length === 0) {
          queryTest = `insert into devices(Macadress, Location_Latitude, Location_Longitude) values(${dbQuery.escape(
            adressDecrypted,
          )}, ${dbQuery.escape(req.body.locationLatitude)}, ${dbQuery.escape(
            req.body.locationLongitude,
          )})`;
          result = await dbQuery(queryTest);
          res.json({ id: result.insertId });
        } else if (checkIfAdressRegistered.length === 1) {
          result = checkIfAdressRegistered;
          res.send(result);
        } else {
          res.json({ error: 'Data error' });
        }
      }
      break;
    default:
      res.status(403);
      res.end();
  }
};
