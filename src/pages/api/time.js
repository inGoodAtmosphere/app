const moment = require('moment');

export default async (req, res) => {
  res.json({
    seconds: moment().format('ss'),
    minutes: moment().format('mm'),
    hours: moment().format('hh'),
    day: moment().format('DD'),
    month: moment().format('MM'),
    year: moment().format('YYYY'),
  });
};
