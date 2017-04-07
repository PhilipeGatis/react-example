import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(
      this.state.email,
      this.state.password
    )
  }

  handleEmailChange = (event) => {
   this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
   this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email:
            <input id="email" type="text" onChange={this.handleEmailChange}/>
          </label>
          <label htmlFor="password">
            Password:
            <input id="password" type="text" onChange={this.handlePasswordChange}/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default Login;
