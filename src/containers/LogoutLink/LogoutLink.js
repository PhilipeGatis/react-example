import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './../../components/LogoutLink/LogoutLink';
import * as actions from './../../actions/auth';

const LogoutLink = ({auth, actions}) =>(
  <Component
    email={auth.loggedUser.email}
    handleClick={actions.logout}
  />
)

LogoutLink.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutLink);
