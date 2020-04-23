export default (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SENSOR':
      return action.activeSensor;
    default:
      return state;
  }
};
