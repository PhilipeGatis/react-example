import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/projectList';

const request = ({ email }) => axios.get('http://jsonplaceholder.typicode.com/posts');

function* listProjectsAsync(action) {
  try {
    const response = yield call(
      request,
      action.payload,
    );

    yield put(actions.listProjectsSuccess(response.data));
  } catch (err) {
    yield put(actions.listProjectsFailed(err));
  }
}

export default function* watchListProjectsAsync() {
  yield takeEvery(actions.LIST_PROJECTS, listProjectsAsync);
}
