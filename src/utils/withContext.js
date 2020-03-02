import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default (WrappedComponent) => {
  const HocComponent = ({ value }) => (
    <Context.Provider value={value}>
      <WrappedComponent />
    </Context.Provider>
  );
  HocComponent.propTypes = {
    value: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.elementType,
        PropTypes.objectOf(PropTypes.string),
      ]),
    ).isRequired,
  };
  return HocComponent;
};
