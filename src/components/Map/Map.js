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
      defaultCenter={{ lat: 50.264593, lng: 19.01524 }}
      defaultZoom={17}
      bootstrapURLKeys={{ key }}
    >
      {sensors.map((sensor) => {
        const data = measurements.find(
          (measurement) => measurement.id === sensor.id,
        );
        return (
          <Marker
            key={sensor.id}
            lat={sensor.lat}
            lng={sensor.lng}
            title={sensor.title}
            data={data}
          />
        );
      })}
    </GoogleMap>
  </div>
);

export default Map;
