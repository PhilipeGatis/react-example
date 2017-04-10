import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import localStore from 'store';
import rootReducer from './reducers';
import rootSaga from './sagas';

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

const initialState = loadState();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middlewares),
));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  const state = store.getState();

  saveState({
    auth: state.auth,
  });
});

export default store;
