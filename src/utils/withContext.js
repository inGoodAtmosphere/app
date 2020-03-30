import React from 'react';
import Context from './Context';

export default (WrappedComponent) => ({ value }) => (
  <Context.Provider value={value}>
    <WrappedComponent />
  </Context.Provider>
);
