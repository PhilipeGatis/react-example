import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const render = (props, component, auth, ...rest) => {
  if (auth.loggedUser) {
    return (
      React.createElement(component, props)
    );
  }
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />
  );
};

const PrivateRoute = ({ component, auth, ...rest }) => (
  <Route
    {...rest} render={props => render(props, component, auth, ...rest)}
  />
);

PrivateRoute.propTypes = {
  component: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
