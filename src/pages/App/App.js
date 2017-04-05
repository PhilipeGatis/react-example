import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Contact from './../Contact/Contact';
import About from './../About/About';
import Home from './../Home/Home';
import NotFound from './../NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>

        <p><Link to="/">Home</Link></p>
        <p><Link to="/contact">Contact</Link></p>
        <p><Link to="/about">About</Link></p>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
