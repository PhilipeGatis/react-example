import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  IS_LOGGING,
} from './../actions/auth';

const initialState = {
  loggedUser: null,
  error: null,
  isLoading: false,
};

export default(state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        loggedUser: null,
        error: action.payload.error,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedUser: action.payload.user,
        error: null,
      };

    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        loggedUser: null,
        error: null,
      };

    case IS_LOGGING:
      return {
        ...state,
        isLoading: true,
        loggedUser: null,
        error: null,
      };

    default:
      return state;
  }
};
