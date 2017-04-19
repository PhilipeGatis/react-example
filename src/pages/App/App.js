import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AppBar, Subheader, Paper, List, ListItem } from 'material-ui';

import './App.css';

import About from './../About/About';
import ProjectList from './../../containers/ProjectList/ProjectList';
import Home from './../Home/Home';
import ProjectEdit from './../../containers/ProjectEdit/ProjectEdit';
import LogoutLink from './../../containers/LogoutLink/LogoutLink';

class App extends Component {
  goTo = (location) => {
    this.props.history.push(location);
  };

  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Smart Composer"
          iconElementRight={<LogoutLink />}
        />
        <div className="app-content">
          <div className="app-content-menu">
            <Paper className="app-content-menu-paper" zDepth={2}>
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
          <div className="app-content-box">
            <Paper className="app-content-box-paper" zDepth={2}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={ProjectList} />
                <Route path="/about" exact component={About} />
                <Route path="/projectEdit/:id" exact component={ProjectEdit} />
                <Redirect to="/" />
              </Switch>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
