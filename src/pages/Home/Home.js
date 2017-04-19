import React, { Component } from 'react';
import Workflow from '../../components/Workflow/Workflow';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home Page</h1>
        <Workflow />
      </div>
    );
  }
}

export default Home;
