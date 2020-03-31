export default (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SENSOR':
      return { current: action.current, avg: action.avg };
    default:
      return state;
  }
};
