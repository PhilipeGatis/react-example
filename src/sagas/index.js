import { fork } from 'redux-saga/effects';
import watchLoginAsync from './auth';

export default function* root() {
  yield [
    fork(watchLoginAsync),
  ];
}
