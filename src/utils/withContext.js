/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Context from './Context';

export default (WrappedComponent) => (props) => (
  <Context.Provider value={props.value}>
    <WrappedComponent {...props} />
  </Context.Provider>
);
