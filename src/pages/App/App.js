import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { AppBar, Toolbar, Text, Layout, Paper } from 'material-ui';

import './App.css';

import Contact from './../../containers/Contact/Contact';
import About from './../About/About';
import ProjectList from './../../containers/ProjectList/ProjectList';
import Home from './../Home/Home';
import LogoutLink from './../../containers/LogoutLink/LogoutLink';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar className="app-bar">
          <Toolbar>
            <Text type="title" className="app-bar-title" colorInherit>Smart Composer</Text>
            <LogoutLink />
          </Toolbar>
        </AppBar>
        <Layout container className="app-content">
          <Layout item xs={4}>
            <Paper elevation={6}>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/projects">Projetos</Link></p>
              <p><Link to="/contact">Contact</Link></p>
              <p><Link to="/about">About</Link></p>
            </Paper>
          </Layout>
          <Layout item xs={8}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={ProjectList} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about" exact component={About} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
