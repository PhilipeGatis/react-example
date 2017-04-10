import React, { Component } from 'react';
import { TextField, Button, Layout, Paper } from 'material-ui';
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
      <form id="login-form" onSubmit={this.handleSubmit}>
        <Layout id="login-container" container>
          <Layout
            item
            xs={12}
            id="login-box"
          >
            <Layout
              container
              direction="row"
              align="center"
              justify="center"
              id="login-box"
            >
              <Layout item xs={5}>
                <Paper id="login-paper" elevation={12}>
                  <h3>
                    Smart Composer
                  </h3>
                  <TextField
                    label="Login"
                    errorText="Este campo é obrigatorio"
                    id="email"
                    type="text"
                    onChange={this.handleEmailChange}
                  />
                  <TextField
                    label="Password"
                    errorText="Este campo é obrigatorio"
                    id="password"
                    type="password"
                    onChange={this.handlePasswordChange}
                  />
                  {
                    this.props.isLoading ? <Loading /> :
                    <Button
                      raised
                      type="submit"
                      primary
                      label="Login"
                    >
                      Login
                    </Button>
                  }
                </Paper>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </form>
    );
  }
}

Login.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
};

export default Login;
