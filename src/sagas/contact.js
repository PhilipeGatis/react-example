import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/contact';

const request = ({id}) => {
  return axios.get(`http://echo.jsontest.com/id/${id}/name/fulano/email/fulano@gmail.com`);
};

function* getContactAsync(action) {
  try {
    const response = yield call(
      request,
      action.payload
    );

    yield put(actions.getContactSuccess(response.data));
  } catch (err) {
    yield put(actions.getContactFailed(err));
  }
}

export default function* watchGetContactAsync() {
  yield takeEvery(actions.GET_CONTACT, getContactAsync);
}
