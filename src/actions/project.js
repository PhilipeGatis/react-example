export const GET_PROJECT = 'GET_PROJECT';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILED = 'GET_PROJECT_FAILED';

export const getProject = id => ({
  type: GET_PROJECT,
  payload: {
    id,
  },
});

export const getProjectFailed = error => ({
  type: GET_PROJECT_FAILED,
  payload: {
    error,
  },
});

export const getProjectSuccess = project => ({
  type: GET_PROJECT_SUCCESS,
  payload: {
    project,
  },
});

export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILED = 'GET_PROJECTS_FAILED';


export const getProjects = email => ({
  type: GET_PROJECTS,
  payload: {
    email,
  },
});

export const getProjectsFailed = error => ({
  type: GET_PROJECTS_FAILED,
  payload: {
    error,
  },
});

export const getProjectsSuccess = projects => ({
  type: GET_PROJECTS_SUCCESS,
  payload: {
    projects,
  },
});

