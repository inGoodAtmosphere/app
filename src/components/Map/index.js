import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import MapContext from '../../utils/map-context';
import styles from './index.module.scss';
import Search from './Search';
import setActiveSensor from './setActiveSensor';

const Map = ({ measurements }) => {
  const {
    activeSensor: { data },
    dispatch,
  } = useContext(MapContext);
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState({
    lat: data?.city?.geo[0],
    lng: data?.city?.geo[1],
  });
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setActiveSensor(
          {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          dispatch,
        );
      });
    }
  }, []);
  useEffect(() => {
    setCenter(data?.city?.geo);
    setZoom(15);
  }, [data]);
  const handleChange = ({ center: centerBounds, zoom: zoomBounds }) => {
    setZoom(zoomBounds);
    setCenter(centerBounds);
  };
  const handleChildClick = async (key, { lat, lng }) => {
    setActiveSensor({ lat, lng }, dispatch);
  };
  return (
    <div className={styles.map}>
      <Search measurements={measurements} />
      <GoogleMap
        center={center}
        zoom={zoom}
        onChange={handleChange}
        onChildClick={handleChildClick}
        options={() => ({
          gestureHandling: 'greedy',
        })}
        bootstrapURLKeys={{
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
