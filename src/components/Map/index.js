import React, { useState, useEffect } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import key from '../../../key';
import './map.module.scss';

const Map = () => {
  const [sensors, setSensors] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isLoadedMeasurements, setIsLoadedMeasurements] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetch('/api/markers')
      .then((res) => res.json())
      .then(
        (result) => {
          setSensors(result);
          setIsLoaded(false);
        },
        () => {
          setIsError(true);
        },
      )
      .then(() =>
        fetch('/api/measurements').then((res) =>
          res.json().then(
            (result) => {
              setMeasurements(result);
              setIsLoadedMeasurements(false);
            },
            () => {
              setIsError(true);
            },
          ),
        ),
      );
  }, []);
  if (isLoaded) return <p>Ładowanie</p>;
  if (isError) return <p>Błąd</p>;

  return (
    <div className="map">
      <GoogleMap
        defaultCenter={{ lat: sensors[0].lat, lng: sensors[0].lng }}
        defaultZoom={15}
        bootstrapURLKeys={{ key }}
      >
        {!isLoadedMeasurements &&
          sensors.map(({ id, lat, lng }) => {
            const data = measurements.find(
              (measurement) => measurement.id === id,
            );
            return <Marker value={{ data }} key={id} lat={lat} lng={lng} />;
          })}
      </GoogleMap>
    </div>
  );
};

export default Map;
