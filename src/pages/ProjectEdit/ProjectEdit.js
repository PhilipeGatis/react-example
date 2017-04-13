import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Subheader, Paper, List, ListItem } from 'material-ui';

import './ProjectEdit.css';

import About from './../About/About';
import ProjectList from './../../containers/ProjectList/ProjectList';
import Home from './../Home/Home';

class ProjectEdit extends Component {
  goTo = (location) => {
    this.props.history.push(location);
  };

  render() {
    return (
      <div>
        <div className="edit-project-content">
          <div className="edit-project-content-menu">
            <Paper className="edit-project-content-menu-paper" zDepth={2}>
              <List>
                <Subheader>Menu</Subheader>
                <ListItem
                  onTouchTap={() => this.goTo('/')}
                  primaryText="Home"
                />
                <ListItem
                  onTouchTap={() => this.goTo('/projects')}
                  primaryText="Projetos"
                />
                <ListItem
                  onTouchTap={() => this.goTo('/about')}
                  primaryText="Sobre"
                />
              </List>
            </Paper>
          </div>
          <div className="edit-project-content-box">
            <Paper className="edit-project-content-box-paper" zDepth={2}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={ProjectList} />
                <Route path="/about" exact component={About} />
                <Route path="/projectEdit/:id" exact component={About} />
                <Redirect to="/" />
              </Switch>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

ProjectEdit.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default ProjectEdit;
