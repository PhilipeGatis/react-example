import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import localStore from 'store';
import auth from './reducers/auth';

const loadState = () => {
  try {
    const serializedState = localStore.get('react-example-state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);

    localStore.set('react-example-state', serializedState);
  } catch (err) {
  // ignore white errors
  }
};

const sagaMiddleware = createSagaMiddleware();

 /* eslint-disable no-underscore-dangle */
let store = (() => {
  const initialState = loadState();

  return createStore(
    combineReducers({auth}),
    initialState,
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
})();
/* eslint-enable */

store.subscribe(() => {
  const state = store.getState();

  saveState({
    auth: state.auth
  });
});

export default store;
