const moment = require('moment');

export default async (req, res) => {
  res.json({
    seconds: moment().format('s'),
    minutes: moment().format('m'),
    hours: moment().format('h'),
    day: moment().format('D'),
    month: moment().format('M'),
    year: moment().format('YYYY'),
  });
};
