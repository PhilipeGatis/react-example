import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/project';

const requestGetProjects = ({ email }) => axios.get('http://jsonplaceholder.typicode.com/posts');

function* getProjectsAsync(action) {
  try {
    const response = yield call(
      requestGetProjects,
      action.payload,
    );

    yield put(actions.getProjectsSuccess(response.data));
  } catch (err) {
    yield put(actions.getProjectsFailed(err));
  }
}

export function* watchGetProjectsAsync() {
  yield takeEvery(actions.GET_PROJECTS, getProjectsAsync);
}

const requestGetProject = ({ id }) => axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);

function* getProjectAsync(action) {
  try {
    const response = yield call(
      requestGetProject,
      action.payload,
    );

    yield put(actions.getProjectSuccess(response.data));
  } catch (err) {
    yield put(actions.getProjectFailed(err));
  }
}

export function* watchGetProjectAsync() {
  yield takeEvery(actions.GET_PROJECT, getProjectAsync);
}
