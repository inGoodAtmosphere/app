const moment = require('moment');

export default async (req, res) => {
  if (req.method === 'GET') {
    res.json({
      seconds: parseInt(moment().format('ss'), 10),
      minutes: parseInt(moment().format('mm'), 10),
      hours: parseInt(moment().format('HH'), 10),
      day: parseInt(moment().format('DD'), 10),
      month: parseInt(moment().format('MM'), 10),
      year: parseInt(moment().format('YYYY'), 10),
    });
  } else {
    res.status(403);
    res.end();
  }
};
