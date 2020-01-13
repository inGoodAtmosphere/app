import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import { sensors } from '../data/markers.json';
import { measurements } from '../data/measurements.json';

const Map = () => (
  <div style={{ width: '50vw', height: '50vh' }}>
    <GoogleMap
      defaultCenter={{ lat: 50.264518, lng: 19.015257 }}
      defaultZoom={10}
      bootstrapURLKeys={{ key: 'AIzaSyCh1H_l5l1fTYEbY8p8MvK8JZ9c5-1Y_3o' }}
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
            color="#f11"
          />
        );
      })}
    </GoogleMap>
  </div>
);

export default Map;
