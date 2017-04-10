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


