const moment = require('moment');

export default async (req, res) => {
  if (req.method === 'GET') {
    res.json({
      seconds: moment().format('ss'),
      minutes: moment().format('mm'),
      hours: moment().format('HH'),
      day: moment().format('DD'),
      month: moment().format('MM'),
      year: moment().format('YYYY'),
    });
  } else {
    res.status(403);
    res.end();
  }
};
