const mapReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_SENSOR':
      return { ...action.data };
    default:
      return state;
  }
};

export default mapReducer;
