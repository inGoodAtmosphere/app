const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  let checkIfDeviceRegisteredQuery={};
  let checkIfDeviceRegistered=[];
  let query = '';
  let result = '';
  const {
    query: { id },
  } = req;
  switch (req.method) {
    case 'GET':
      // query = `SELECT ID as id, measurement_date as measurementDate, round(avg(humidity)) as humidity ,round(avg(temperature)) as temperature ,round(avg(pm1)) as pm1, round(avg(pm25)) as 'pm2.5', round(avg(pm10)) as pm10  FROM measurements WHERE device_id=${dbQuery.escape(
      //   id,
      // )} GROUP BY measurement_date;`;
      query = `SELECT m.ID as id, m.measurement_date as measurementDate, round(avg(m.humidity)) as humidity ,round(avg(m.temperature)) as temperature ,round(avg(m.pm1)) as pm1, round(avg(m.pm25)) as 'pm2.5', round(avg(m.pm10)) as pm10  FROM measurements as m inner join devices on m.device_id=devices.id WHERE m.device_id=${dbQuery.escape(
        id,
      )} GROUP BY m.measurement_date;`;
      result = await dbQuery(query);
      break;
    case 'POST':
      checkIfDeviceRegisteredQuery =`Select id from devices where id=${dbQuery.escape(id)}`
      checkIfDeviceRegistered=dbQuery(checkIfDeviceRegisteredQuery);
      if(checkIfDeviceRegistered===1)
      {
        query = `INSERT INTO measurements(device_id,measurement_date, measurement_time, receive_date,receive_time, humidity, temperature, pm1,pm25,pm10) values(${dbQuery.escape(
          id,
        )},${dbQuery.escape(req.body.measurementDate)},${dbQuery.escape(
          req.body.measurementTime,
        )},CURRENT_DATE, CURRENT_TIME, ${dbQuery.escape(
          req.body.humidity,
        )},${dbQuery.escape(req.body.temperature)},${dbQuery.escape(
          req.body.pm1,
        )},${dbQuery.escape(req.body.pm25)},${dbQuery.escape(req.body.pm10)})`;
        result = await dbQuery(query);
      }
      else if(checkIfDeviceRegistered===0)
      {
        result={error: "Device not registered"}
      }
      else{
        result={error: "Data error"};
      }
      break;
    default:
      res.status(403);
      res.end();
  }
  res.send(result);
};
