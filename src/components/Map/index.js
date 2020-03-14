import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import key from '../../../key';
import useFetch from '../../hooks/useFetch';
import './map.module.scss';

const Map = () => {
  const fetchedMarkers = useFetch('/api/markers');
  const fetchedMeasurements = useFetch('/api/measurements');
  if (fetchedMarkers.isLoaded) return <p>Ładowanie</p>;
  if (fetchedMarkers.isError) return <p>Błąd</p>;

  return (
    <div className="map">
      <GoogleMap
        defaultCenter={{
          lat: fetchedMarkers.data[0].lat,
          lng: fetchedMarkers.data[0].lng,
        }}
        defaultZoom={15}
        bootstrapURLKeys={{ key }}
      >
        {!fetchedMeasurements.isLoaded &&
          fetchedMarkers.data.map(({ id, lat, lng }) => {
            const data = fetchedMeasurements.data.find(
              (measurement) => measurement.id === id,
            );
            return <Marker value={{ data }} key={id} lat={lat} lng={lng} />;
          })}
      </GoogleMap>
    </div>
  );
};

export default Map;
