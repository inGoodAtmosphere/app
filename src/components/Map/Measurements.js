import React, { useContext, useEffect, useState } from 'react';
import Caqi from './Caqi';
import Pm from './Pm';
import './measurements.module.scss';
import MapContext from '../../utils/map-context';
import { logEvent } from '../../utils/analytics';

const Measurements = () => {
  const [title, setTitle] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const {
    activeSensor: {
      current: { deviceId },
    },
    markers,
  } = useContext(MapContext);
  const { lat, lng } = markers.find((marker) => marker.id === deviceId);
  useEffect(() => {
    const setKey = (obj) => {
      const possibleKeys = ['city', 'village', 'town'];
      for (let i = 0; i < possibleKeys.length; i += 1) {
        if (possibleKeys[i] in obj) {
          return possibleKeys[i];
        }
      }
      return 'state';
    };
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}5&key=db5e35877d884689bf8e15ed95b49fba`,
        );
        const json = await res.json();
        const key = setKey(json.results[0].components);
        setTitle(json.results[0].components[key]);
        setIsLoaded(false);
      } catch (err) {
        logEvent('Error', err);
      }
    };
    fetchData();
  }, [deviceId]);
  return (
    <>
      <h1 className="map__city">{isLoaded ? '...' : title}</h1>
      <Caqi />
      <div className="map__pm">
        <Pm purpose="pm2.5" />
        <Pm purpose="pm10" />
      </div>
    </>
  );
};

export default Measurements;
