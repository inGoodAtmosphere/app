export default (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SENSOR':
      return { ...action.data };
    default:
      return state;
  }
};
