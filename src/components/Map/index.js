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
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState({
    lat: data.city.geo[0],
    lng: data.city.geo[1],
  });
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setZoom(11);
      });
    }
  }, []);
  useEffect(() => {
    setCenter(data.city.geo);
    setZoom(16);
  }, [data]);
  const handleChange = ({ center: centerBounds, zoom: zoomBounds }) => {
    setZoom(zoomBounds);
    setCenter(centerBounds);
  };
  const handleChildClick = (key, { lat, lng }) => {
    setCenter({
      lat,
      lng,
    });
    setZoom(16);
  };
  return (
    <div className={styles.map}>
      <GoogleMap
        center={center}
        zoom={zoom}
        onChange={handleChange}
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
