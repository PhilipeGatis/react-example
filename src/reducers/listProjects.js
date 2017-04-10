import {
  LIST_PROJECTS,
  LIST_PROJECTS_SUCCESS,
  LIST_PROJECTS_FAILED,
} from './../actions/projectList';

const initialState = {
  projects: null,
  error: null,
  isLoading: false,
};

export default(state = initialState, action) => {
  switch (action.type) {
    case LIST_PROJECTS:
      return {
        ...state,
        isLoading: true,
        projects: action.payload.projects,
        error: action.payload.error,
      };

    case LIST_PROJECTS_FAILED:
      return {
        ...state,
        isLoading: false,
        projects: null,
        error: action.payload.error,
      };

    case LIST_PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: action.payload.projects,
        error: null,
      };

    default:
      return state;
  }
};
