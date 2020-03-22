const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let query = '';
  let result = '';
  let checkIfAdressRegistered = {};
  const {
    query: { adress },
  } = req;
  switch (req.method) {
    case 'POST':
      query = `select id from devices where Macadress=${dbQuery.escape(
        adress
          .replace('U', 'F')
          .replace('V', 'E')
          .replace('W', 'D')
          .replace('X', 'C')
          .replace('Y', 'T')
          .replace('Z', 'A'),
      )}`;
      checkIfAdressRegistered = await dbQuery(query);
      if (checkIfAdressRegistered.length === 0) {
        query = `insert into devices(Macadress, Location_Latitude, Location_Longitude) values(${dbQuery.escape(adress)}, ${dbQuery.escape(req.body.locationLatitude)}, ${dbQuery.escape(req.body.locationLongitude)})`;
        result = await dbQuery(query);
        res.send(result);
      } else if (checkIfAdressRegistered.length === 1) {
        result = checkIfAdressRegistered;
        res.send(result);
      } else {
        res.json({ error: 'Data error' });
      }
      break;
    default:
      res.status(403);
      res.end();
  }
  res.send(result);
};
