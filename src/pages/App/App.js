import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { AppBar, Subheader, Paper, List, ListItem } from 'material-ui';

import './App.css';

import About from './../About/About';
import ProjectList from './../../containers/ProjectList/ProjectList';
import Home from './../Home/Home';
import LogoutLink from './../../containers/LogoutLink/LogoutLink';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Smart Composer"
          iconElementRight={<LogoutLink />}
        />
        <div className="app-content">
          <div className="app-content-menu">
            <Paper className="app-content-menu-paper" zDepth={2}>
              <List>
                <Subheader>Menu</Subheader>
                <Link to="/">
                  <ListItem
                    primaryText="Home"
                  />
                </Link>
                <Link to="/projects">
                  <ListItem
                    primaryText="Projetos"
                  />
                </Link>
                <Link to="/about">
                  <ListItem
                    primaryText="Sobre"
                  />
                </Link>
              </List>
            </Paper>
          </div>
          <div className="app-content-box">
            <Paper className="app-content-box-paper" zDepth={2}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={ProjectList} />
                <Route path="/about" exact component={About} />
                <Redirect to="/" />
              </Switch>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
