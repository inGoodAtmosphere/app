import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import { sensors } from '../data/markers.json';
import { measurements } from '../data/measurements.json';
import key from '../data/key';

const Map = () => {
  console.log(measurements);
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <GoogleMap
        defaultCenter={{ lat: 50.264518, lng: 19.015257 }}
        defaultZoom={10}
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
};

export default Map;
