const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let queryTest = '';
  let result = '';
  let checkIfAdressRegistered = {};
  const {
    query: { adress },
  } = req;
  switch (req.method) {
    case 'POST':
      if (adress.length !== 17) {
        res.json({ error: 'wrong input' });
      } else {
        query = `select id from devices where Macadress=${dbQuery.escape(
          adress
            .replace('U', 'F')
            .replace('V', 'E')
            .replace('W', 'D')
            .replace('X', 'C')
            .replace('Y', 'B')
            .replace('Z', 'A'))}`;
        checkIfAdressRegistered = await dbQuery(query).then(async ()=>{
        if (checkIfAdressRegistered.length === 0) {
          queryTest = `insert into devices(Macadress, Location_Latitude, Location_Longitude) values(${dbQuery.escape(
            adress
              .replace('U', 'F')
              .replace('V', 'E')
              .replace('W', 'D')
              .replace('X', 'C')
              .replace('Y', 'B')
              .replace('Z', 'A')
          )}, ${dbQuery.escape(req.body.locationLatitude)}, ${dbQuery.escape(
            req.body.locationLongitude,
          )})`;
          result = await dbQuery(queryTest);
          res.send(result.insertId);
        } else if (checkIfAdressRegistered.length === 1) {
          result = checkIfAdressRegistered;
          res.send(result);
        } else {
          res.json({ error: 'Data error' });
        }
      });};
      break;
    default:
      res.status(403);
      res.end();
  }
};
