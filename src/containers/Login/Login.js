import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './../../pages/Login/Login';
import * as actions from './../../actions/auth';

const Login = ({auth, actions}) =>(
  <Component
    handleSubmit={actions.login}
  />
)

Login.propTypes = {
  auth: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
