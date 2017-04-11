import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './../../components/LogoutLink/LogoutLink';
import * as actions from './../../actions/auth';

const LogoutLink = ({ actions }) => (
  <Component
    handleClick={actions.logout}
  />
);

LogoutLink.propTypes = {
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutLink);
