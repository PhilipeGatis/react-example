import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'typeface-roboto';

import PrivateRoute from './containers/PrivateRoute/PrivateRoute';
import PublicRoute from './containers/PublicRoute/PublicRoute';

import App from './pages/App/App';
import Login from './containers/Login/Login';
import store from './store';

import './index.css';

const history = createBrowserHistory();

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Switch>
          <PublicRoute path="/login" exact component={Login} />
          <PrivateRoute path="/" component={App} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root'),
);
