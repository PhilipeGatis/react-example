import { combineReducers } from 'redux';
import auth from './auth';
import contact from './contact';

const rootReducer = combineReducers({
  auth,
  contact
});

export default rootReducer;
