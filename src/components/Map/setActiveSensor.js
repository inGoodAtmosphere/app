export default async (coordinates, dispatch) => {
  const res = await fetch(
    `https://api.waqi.info/feed/geo:${coordinates.lat};${coordinates.lng}/?token=${process.env.WAQI_TOKEN}`,
  );
  const json = await res.json();
  dispatch({
    type: 'SET_ACTIVE_SENSOR',
    activeSensor: json,
  });
  console.log(json);
  localStorage.setItem('activeSensor', JSON.stringify(coordinates));
};
