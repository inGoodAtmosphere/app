const mapReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_SENSOR':
      return [...action.measurement];
    default:
      return state;
  }
};

export default mapReducer;
