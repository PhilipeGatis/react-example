import { fork } from 'redux-saga/effects';
import watchLoginAsync from './auth';
import watchGetProjectsAsync from './project';

export default function* root() {
  yield [
    fork(watchLoginAsync),
    fork(watchGetProjectsAsync),
  ];
}
