import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/project';

const request = ({ email }) => axios.get('http://jsonplaceholder.typicode.com/posts');

function* getProjectsAsync(action) {
  try {
    const response = yield call(
      request,
      action.payload,
    );

    yield put(actions.getProjectsSuccess(response.data));
  } catch (err) {
    yield put(actions.getProjectsFailed(err));
  }
}

export default function* watchGetProjectsAsync() {
  yield takeEvery(actions.GET_PROJECTS, getProjectsAsync);
}
