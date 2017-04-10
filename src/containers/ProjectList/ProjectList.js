import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Error from './../../components/Error/Error';
import Loading from './../../components/Loading/Loading';
import ProjectListComponent from './../../pages/ProjectList/ProjectList';
import * as actions from './../../actions/projectList';

class ProjectList extends Component {
  componentDidMount() {
    this.props.actions.listProjects('aaaaz');
  }

  render() {
    return (
        this.props.list.error ?
          <Error error={this.props.list.error} />
        : this.props.list.isLoading ?
          <Loading />
        : <ProjectListComponent
          isLoading={this.props.list.isLoading}
          projects={this.props.list.projects}
        />
    );
  }
}

ProjectList.propTypes = {
  list: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  list: state.list,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
