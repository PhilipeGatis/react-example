import {
  LOGIN,
  LOGOUT,
  AUTHENTICATE_FAILED,
} from './../actions/auth';

const initialState = {
  loggedUser: null,
  error: null
}

export default(state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_FAILED:
      return {
        ...state,
        error: action.payload.error
      };

    case LOGIN:
      return {
        ...state,
        loggedUser: action.payload.user,
        error: null
      };

    case LOGOUT:
      return {
        ...state,
        loggedUser: null,
        error: null
      };

    default:
      return state;
  }
};
