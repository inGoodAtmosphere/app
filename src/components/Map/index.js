import React, { useContext } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import key from '../../../key';
import MapContext from '../../utils/map-context';
import './map.module.scss';

const Map = () => {
  const { measurements, markers } = useContext(MapContext);
  return (
    <div className="map">
      <GoogleMap
        // TODO: Default center to active marker
        defaultCenter={{
          lat: markers[0].lat,
          lng: markers[0].lng,
        }}
        defaultZoom={15}
        bootstrapURLKeys={{ key }}
      >
        {markers.map(({ id, lat, lng }) => {
          const data = measurements.find(
            (measurement) => measurement.device_id === id,
          );
          return <Marker value={{ data }} key={id} lat={lat} lng={lng} />;
        })}
      </GoogleMap>
    </div>
  );
};

export default Map;
