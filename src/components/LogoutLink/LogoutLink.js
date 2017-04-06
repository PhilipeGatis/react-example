import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

class LogoutLink extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.actions.logout();
  }

  render() {
    return (
      <span>
       {this.props.auth.loggedUser.email}{' '}(<a href="#" onClick={this.handleClick}>Sair</a>)
      </span>
    );
  }
}

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
