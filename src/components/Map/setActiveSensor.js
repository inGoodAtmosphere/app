export default async (coordinates, dispatch, key) => {
  let res;
  let data;
  if (key === '71') {
    res = await fetch('/api/measurements/71');
    const jsonArr = await res.json();
    const json = jsonArr[jsonArr.length - 1]
    const formattedData = {
      status: 'ok',
      data: {
        city: {
          geo: coordinates,
          name: 'Siemianowice Śląskie',
        },
        aqi: json.pm10,
        iaqi: {
          h: {
            v: json.humidity,
          },
          pm1: {
            v: json.pm1,
          },
          pm10: {
            v: json.pm10,
          },
          pm25: {
            v: json['pm2.5'],
          },
          t: {
            v: json.temperature,
          },
        },
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
