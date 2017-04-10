import { combineReducers } from 'redux';
import auth from './auth';
import contact from './contact';
import project from './project';

const rootReducer = combineReducers({
  auth,
  contact,
  project,
});

export default rootReducer;
