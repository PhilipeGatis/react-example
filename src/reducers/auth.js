import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from './../actions/auth';

const initialState = {
  loggedUser: null,
  error: null
}

export default(state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAILED:
      return {
        ...state,
        loggedUser: null,
        error: action.payload.error
      };

    case LOGIN_SUCCESS:
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
