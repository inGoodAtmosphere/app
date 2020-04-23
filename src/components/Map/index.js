import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import MapContext from '../../utils/map-context';
import styles from './index.module.scss';

const Map = ({ measurements }) => {
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState({});
  const {
    activeSensor: { data },
  } = useContext(MapContext);
  useEffect(() => {
    setCenter({
      lat: data.city.geo[0],
      lng: data.city.geo[1],
    });
  }, []);
  const handleBoundsChange = (centerBounds, zoomBounds) => {
    setZoom(zoomBounds);
    setCenter(centerBounds);
  };
  const handleChildClick = (key, { lat, lng }) => {
    setZoom(16);
    setCenter({
      lat,
      lng,
    });
  };
  return (
    <div className={styles.map}>
      <GoogleMap
        center={center}
        zoom={zoom}
        onBoundsChange={handleBoundsChange}
        onChildClick={handleChildClick}
        bootstrapURLKeys={{
          key: process.env.MAP_API_KEY,
          language: 'pl',
        }}
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
