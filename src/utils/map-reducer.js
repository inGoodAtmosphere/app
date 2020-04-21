export default (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SENSOR':
      return action.activeSensor.data;
    default:
      return state;
  }
};
