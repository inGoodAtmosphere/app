import PropTypes from 'prop-types';

export default (propName) => ({
  [propName]: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
});
