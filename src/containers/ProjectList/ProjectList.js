import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Error from './../../components/Error/Error';
import Loading from './../../components/Loading/Loading';
import ProjectListComponent from './../../pages/ProjectList/ProjectList';
import * as actions from './../../actions/project';

class ProjectList extends Component {
  componentDidMount() {
    this.props.actions.getProjects('aaaaz');
  }

  render() {
    if (this.props.error) {
      return <Error error={this.props.error} />;
    }

    if (this.props.isLoading) {
      return <Loading size={70} center />;
    }

    return (
      <ProjectListComponent
        isLoading={this.props.isLoading}
        projects={this.props.projects}
      />
    );
  }
}

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
  error: React.PropTypes.object,
  isLoading: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
  projects: state.project.list,
  error: state.project.error,
  isLoading: state.project.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
