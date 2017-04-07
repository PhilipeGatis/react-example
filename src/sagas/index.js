import { fork } from 'redux-saga/effects';
import watchLoginAsync from './auth';
import watchGetContactAsync from './contact';

export default function* root() {
  yield [
    fork(watchLoginAsync),
    fork(watchGetContactAsync),
  ];
}
