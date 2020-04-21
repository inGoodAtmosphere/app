import React, { useContext, useEffect, useState } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import MapContext from '../../utils/map-context';
import mapPropTypes from '../../utils/map-prop-types';
import styles from './index.module.scss';

const Map = ({ measurements }) => {
  const { activeSensor } = useContext(MapContext);
  const [defaultCenter, setDefaultCenter] = useState({});
  useEffect(() => {
    setDefaultCenter({
      lat: activeSensor.city.geo[0],
      lng: activeSensor.city.geo[1],
    });
  }, []);
  return (
    <div className={styles.map}>
      <GoogleMap
        defaultCenter={defaultCenter}
        defaultZoom={14}
        bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
      >
        {measurements.map(({ uid, lat, lon, aqi }) => {
          return <Marker key={uid} lat={lat} lng={lon} aqi={aqi} />;
        })}
      </GoogleMap>
    </div>
  );
};

Map.propTypes = mapPropTypes;

export default Map;
