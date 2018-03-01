const HeaderReducers = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        color: action.color,
      };
    default:
      return state;
  }
};
export default HeaderReducers;
