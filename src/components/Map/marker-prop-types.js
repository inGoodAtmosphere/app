import PropTypes from 'prop-types';

export default {
  data: PropTypes.shape({
    pm25: PropTypes.number,
    pm10: PropTypes.number,
  }).isRequired,
  title: PropTypes.string.isRequired,
};
