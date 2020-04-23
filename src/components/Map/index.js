import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import MapContext from '../../utils/map-context';
import styles from './index.module.scss';

const Map = ({ measurements }) => {
  const {
    activeSensor: { data },
  } = useContext(MapContext);
  const [defaultCenter, setDefaultCenter] = useState({});
  useEffect(() => {
    setDefaultCenter({
      lat: data.city.geo[0],
      lng: data.city.geo[1],
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

Map.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.objectOf(PropTypes.string),
      ]),
    ),
  ).isRequired,
};

export default Map;
