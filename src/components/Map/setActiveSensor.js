import countCaqi from "../../utils/countCaqi";

export default async (coordinates, dispatch, key) => {
  let res;
  let data;
  if (key === '71' || key === 71) {
    res = await fetch('/api/measurements/71');
    const json = await res.json();
    const formattedData = {
      status: 'ok',
      data: {
        city: {
          geo: coordinates,
          name: 'Siemianowice Śląskie, Poland',
        },
        idx: 71,
        aqi: countCaqi(json[json.length - 1].pm10, json[json.length - 1]['pm2.5']),
        iaqi: {
          h: {
            v: json[json.length - 1].humidity,
          },
          pm1: {
            v: json[json.length - 1].pm1,
          },
          pm10: {
            v: json[json.length - 1].pm10,
          },
          pm25: {
            v: json[json.length - 1]['pm2.5'],
          },
          t: {
            v: json[json.length - 1].temperature,
          },
        },
        history: json.map((element) => ({
          measurementDate: element.measurementDate,
          'pm2.5': element.pm25,
          pm10: element.pm10,
          pm1: element.pm1,
          caqi: countCaqi(element.pm25, element.pm10),
          temperature: element.temperature,
          humidity: element.humidity,
        })),
      },
    };
    data = formattedData;
  } else {
    res = await fetch(
      `https://api.waqi.info/feed/geo:${coordinates.lat};${coordinates.lng}/?token=${process.env.WAQI_TOKEN}`,
    );
    data = await res.json();
  }
  dispatch({
    type: 'SET_ACTIVE_SENSOR',
    activeSensor: data,
  });
  localStorage.setItem('activeSensor', JSON.stringify(coordinates));
};
