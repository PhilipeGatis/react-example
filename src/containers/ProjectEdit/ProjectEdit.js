import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Error from './../../components/Error/Error';
import Loading from './../../components/Loading/Loading';
import ProjectEditComponent from './../../pages/ProjectEdit/ProjectEdit';
import * as actions from './../../actions/project';

class ProjectEdit extends Component {
  componentDidMount() {
    this.props.actions.getProject(this.props.match.params.id);
  }

  render() {
    if (this.props.error) {
      return <Error error={this.props.error} />;
    }

    if (this.props.isLoading) {
      return <Loading size={70} center />;
    }

    return (
      <ProjectEditComponent
        isLoading={this.props.isLoading}
        project={this.props.project}
      />
    );
  }
}

ProjectEdit.propTypes = {
  project: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  error: React.PropTypes.object,
  isLoading: React.PropTypes.bool.isRequired,
  match: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  project: state.project.project,
  error: state.project.error,
  isLoading: state.project.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);
