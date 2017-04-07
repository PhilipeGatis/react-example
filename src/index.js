import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './containers/PrivateRoute/PrivateRoute';
import PublicRoute from './containers/PublicRoute/PublicRoute';

import App from './pages/App/App';
import Login from './containers/Login/Login';
import store from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PublicRoute path="/login" exact component={Login}/>
        <PrivateRoute path="/" component={App}/>
      </Switch>
     </Router>
  </Provider>
  ,
  document.getElementById('root')
);
