import React, { useReducer } from 'react';
import Map from '../../components/Map/Map';
import Data from '../../components/Map/Data';
import MapContext from '../../contexts/map-context';
import mapReducer from '../../reducers/map-reducer';

const MapPage = () => {
  const [state, dispatch] = useReducer(mapReducer, {});
  return (
    <MapContext.Provider value={{ state, dispatch }}>
      <Map />
      <main className="content">
        <Data />
      </main>
    </MapContext.Provider>
  );
};

export default MapPage;
