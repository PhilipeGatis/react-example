import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedUser ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

PrivateRoute.propTypes = {
  component: React.PropTypes.object.isRequired,
  auth: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(PrivateRoute);
