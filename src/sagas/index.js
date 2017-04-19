import { fork } from 'redux-saga/effects';
import watchLoginAsync from './auth';
import { watchGetProjectsAsync, watchGetProjectAsync } from './project';

export default function* root() {
  yield [
    fork(watchLoginAsync),
    fork(watchGetProjectsAsync),
    fork(watchGetProjectAsync),
  ];
}
