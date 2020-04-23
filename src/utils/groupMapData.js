export const getMainData = (data) => ({
  'pm2.5': data.pm25 && data.pm25.v,
  pm10: data.pm10 && data.pm10.v,
});

export const getSecondaryData = (data) => ({
  co: data.co && data.co.v,
  no2: data.no2 && data.no2.v,
  o3: data.o3 && data.o3.v,
  so2: data.so2 && data.so2.v,
});

export const getWeatherData = (data) => ({
  temperature: data.t && data.t.v.toFixed(),
  humidity: data.h && data.h.v.toFixed(),
});
