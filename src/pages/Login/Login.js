import React, { Component } from 'react';
import { TextField, RaisedButton, Paper } from 'material-ui';
import Loading from './../../components/Loading/Loading';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(
      this.state.email,
      this.state.password,
    );
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form className="login-wrapper" onSubmit={this.handleSubmit}>
        <Paper className="login-box" zDepth={5}>
          <h2 className="login-box-title">
            Smart Composer
          </h2>
          <div className="login-box-content">
            <TextField
              fullWidth
              floatingLabelText="Login"
              id="email"
              type="text"
              onChange={this.handleEmailChange}
            />
            <TextField
              fullWidth
              floatingLabelText="Password"
              id="password"
              type="password"
              onChange={this.handlePasswordChange}
            />
            <div className="login-box-button">
              {
                this.props.isLoading ?
                  <Loading size={25} center={false} /> :
                  <RaisedButton
                    type="submit"
                    primary
                    label="Login"
                  />
              }
            </div>
          </div>
        </Paper>
      </form>
    );
  }
}

Login.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
};

export default Login;
