import React, { useReducer } from 'react';
import Map from '../../components/Map/Map';
import Data from '../../components/Map/Data';
import MapContext from '../../contexts/map-context';
import mapReducer from '../../reducers/map-reducer';
import { measurements } from '../../../public/data/measurements.json';

const defaultSensor = measurements[0];

// TODO: defaultState from gps/cookies

const MapPage = () => {
  const [activeSensor, dispatch] = useReducer(mapReducer, {
    ...defaultSensor,
  });
  return (
    <MapContext.Provider value={{ activeSensor, dispatch }}>
      <Map />
      <main className="content">
        <Data />
      </main>
    </MapContext.Provider>
  );
};

export default MapPage;
