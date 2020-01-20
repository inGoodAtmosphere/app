import React, { useReducer } from 'react';
import Map from './Map';
import Data from './MapData';
import MapContext from '../contexts/map-context';
import mapReducer from '../reducers/map-reducer';

const MapPage = () => {
  const [state, dispatch] = useReducer(mapReducer, [{ pm25: 231, pm10: 231 }]);
  return (
    <MapContext.Provider value={{ state, dispatch }}>
      <div>
        <Map />
        <Data />
      </div>
    </MapContext.Provider>
  );
};

export default MapPage;
