import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILED,
} from './../actions/project';

const initialState = {
  list: [],
  error: null,
  isLoading: false,
};

export default(state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        isLoading: true,
        list: action.payload.projects,
        error: action.payload.error,
      };

    case GET_PROJECTS_FAILED:
      return {
        ...state,
        isLoading: false,
        list: null,
        error: action.payload.error,
      };

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.projects,
        error: null,
      };

    default:
      return state;
  }
};
