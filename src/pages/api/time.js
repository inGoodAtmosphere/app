const moment = require('moment');

export default async (req, res) => {
  if (req.method === 'GET') {
    res.json({
      seconds: parseInt(moment().format('s'), 10),
      minutes: parseInt(moment().format('m'), 10),
      hours: parseInt(moment().format('H'), 10),
      day: parseInt(moment().format('D'), 10),
      month: parseInt(moment().format('M'), 10),
      year: parseInt(moment().format('YYYY'), 10),
    });
  } else {
    res.status(403);
    res.end();
  }
};
