import React, { useContext } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import key from '../../../key';
import MapContext from '../../utils/map-context';
import './map.module.scss';

const Map = () => {
  const { measurements, markers, activeSensor } = useContext(MapContext);
  const activeMarker = markers.find(
    (marker) => marker.id === activeSensor.current.device_id,
  );
  return (
    <div className="map">
      <GoogleMap
        defaultCenter={{
          lat: activeMarker.lat,
          lng: activeMarker.lng,
        }}
        defaultZoom={15}
        bootstrapURLKeys={{ key }}
      >
        {markers.map(({ id, lat, lng }) => {
          const data = measurements.find(
            (measurement) => measurement.device_id === id,
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
