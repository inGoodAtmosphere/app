const breakpoints = {
  pm25: [0, 15, 30, 55, 110, 999],
  pm10: [0, 25, 50, 90, 180, 999],
};
const countCaqi = (breakpointsArray, concentration) => {
  const setBreakpoints = () => {
    let highestIndex = 0;
    for (let i = 0; concentration > breakpointsArray[i]; i += 1) {
      highestIndex = i;
    }
    return highestIndex + 1;
  };
  const index = [0, 25, 50, 75, 100, 200];
  const breakpoint = setBreakpoints();
  return (
    ((index[breakpoint] - index[breakpoint - 1]) /
      (breakpointsArray[breakpoint] - breakpointsArray[breakpoint - 1])) *
      (concentration - breakpointsArray[breakpoint - 1]) +
    index[breakpoint - 1]
  );
};
export default (pm25, pm10) =>
  Math.round(
    (countCaqi(breakpoints.pm25, pm25) + countCaqi(breakpoints.pm10, pm10)) / 2,
  );
