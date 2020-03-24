import React, { useContext } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import MapContext from '../../utils/map-context';
import './map.module.scss';

const Map = () => {
  const { measurements, markers, activeSensor } = useContext(MapContext);
  const activeMarker = markers.find(
    (marker) => marker.id === activeSensor.current.deviceId,
  );
  return (
    <div className="map">
      <GoogleMap
        defaultCenter={{
          lat: activeMarker.lat,
          lng: activeMarker.lng,
        }}
        defaultZoom={14}
        bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
      >
        {markers.map(({ id, lat, lng }) => {
          const data = measurements.find(
            (measurement) => measurement.deviceId === id,
          );
          return (
            <Marker
              data={data ? { data } : { error: 'Coś poszło nie tak' }}
              key={id}
              lat={lat}
              lng={lng}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Map;
