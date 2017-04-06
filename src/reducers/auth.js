export default(state = {}, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        loggedUser: action.payload.email
      };
    case 'logout':
      return {
        ...state,
        loggedUser: null
      };
    default:
      return state;
  }
};
