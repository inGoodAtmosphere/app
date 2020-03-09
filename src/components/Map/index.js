import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import { sensors } from '../../../public/data/markers.json';
import { measurements } from '../../../public/data/measurements.json';
import key from '../../../key';
import './map.module.scss';

const Map = () => (
  <div className="map">
    <GoogleMap
      defaultCenter={{ lat: sensors[0].lat, lng: sensors[0].lng }}
      defaultZoom={15}
      bootstrapURLKeys={{ key }}
    >
      {sensors.map(({ id, lat, lng }) => {
        const data = measurements.find((measurement) => measurement.id === id);
        return <Marker value={{ data }} key={id} lat={lat} lng={lng} />;
      })}
    </GoogleMap>
  </div>
);

export default Map;
