import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/auth';

const request = ({email, password}) => {
  return axios.get(`http://echo.jsontest.com/email/${email}/password/${password}`);
};

function* authenticate(action) {
  try {
    const response = yield call(
      request,
      action.payload
    );

    yield put(actions.login(response.data));
  } catch (err) {
    yield put(actions.authenticateFailed(err));
  }
}

export function* watchAuthenticate() {
  yield takeEvery(actions.AUTHENTICATE, authenticate);
}
