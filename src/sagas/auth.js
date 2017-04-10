import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/auth';

const request = ({ email, password }) => axios.get(`http://echo.jsontest.com/email/${email}/password/${password}`);

function* loginAsync(action) {
  try {
    const response = yield call(
      request,
      action.payload,
    );

    yield put(actions.loginSuccess(response.data));
  } catch (err) {
    yield put(actions.loginFailed(err));
  }
}

export default function* watchLoginAsync() {
  yield takeEvery(actions.LOGIN, loginAsync);
}
