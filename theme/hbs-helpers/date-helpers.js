const moment = require('moment');

const locale = 'nl';

const dateHelpers = {
  MY: date => moment(date.toString(), ['YYYY-MM-DD'], locale).format('MMM YYYY'),
  Y: date => moment(date.toString(), ['YYYY-MM-DD'], locale).format('YYYY'),
  DMY: date => moment(date.toString(), ['YYYY-MM-DD'], locale).format('D MMM YYYY')
};

module.exports = { dateHelpers };
