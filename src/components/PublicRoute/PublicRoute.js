import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    !auth.loggedUser ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

PublicRoute.propTypes = {
  component: React.PropTypes.object.isRequired,
  auth: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(PublicRoute);
