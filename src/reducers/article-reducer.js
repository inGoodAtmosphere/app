const articleReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLE':
      console.log(action.header);
      return action.header;
    default:
      // console.log(action);
      return state;
  }
};
export default articleReducer;
