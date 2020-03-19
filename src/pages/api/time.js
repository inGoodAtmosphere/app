const moment = require('moment');

export default async (req, res) => {
  res.json({
    seconds: parseInt(moment().format('s'), 10),
    minutes: parseInt(moment().format('m'), 10),
    hours: parseInt(moment().format('h'),10),
    day: parseIntmoment(().format('D'),10),
    month: parseIntmoment(().format('M'),10),
    year: parseIntmoment(().format('YYYY'),10),
  });
};
