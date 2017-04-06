import { fork } from 'redux-saga/effects';
import watchAuthenticate from './auth';

export default function* root() {
  yield [
    fork(watchAuthenticate),
  ];
}
