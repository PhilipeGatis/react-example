import {
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILED,
  GET_CONTACT,
} from './../actions/contact';

const initialState = {
  model: null,
  error: null,
  isLoading: true,
};

export default(state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        model: null,
        error: null,
        isLoading: true,
      };

    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        model: action.payload.contact,
        error: null,
        isLoading: false,
      };

    case GET_CONTACT_FAILED:
      return {
        ...state,
        model: null,
        error: action.payload.error,
        isLoading: false,
      };

    default:
      return state;
  }
};
