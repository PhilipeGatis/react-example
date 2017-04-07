import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Contact from './../../containers/Contact/Contact';
import About from './../About/About';
import Home from './../Home/Home';
import LogoutLink from './../../containers/LogoutLink/LogoutLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>

        <p><LogoutLink/></p>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/contact">Contact</Link></p>
        <p><Link to="/about">About</Link></p>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/about" exact component={About}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
