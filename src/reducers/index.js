import { combineReducers } from 'redux';
import auth from './auth';
import contact from './contact';
import listProjects from './listProjects';

const rootReducer = combineReducers({
  auth,
  contact,
  listProjects,
});

export default rootReducer;
