export const LIST_PROJECTS = 'LIST_PROJECTS';
export const LIST_PROJECTS_SUCCESS = 'LIST_PROJECTS_SUCCESS';
export const LIST_PROJECTS_FAILED = 'LIST_PROJECTS_FAILED';

export const listProjects = email => ({
  type: LIST_PROJECTS,
  payload: {
    email,
  },
});

export const listProjectsFailed = error => ({
  type: LIST_PROJECTS_FAILED,
  payload: {
    error,
  },
});

export const listProjectsSuccess = projects => ({
  type: LIST_PROJECTS_SUCCESS,
  payload: {
    projects,
  },
});


