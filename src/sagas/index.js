import { fork } from 'redux-saga/effects';
import watchLoginAsync from './auth';
import watchGetContactAsync from './contact';
import watchGetProjectsAsync from './project';

export default function* root() {
  yield [
    fork(watchLoginAsync),
    fork(watchGetContactAsync),
    fork(watchGetProjectsAsync),
  ];
}
