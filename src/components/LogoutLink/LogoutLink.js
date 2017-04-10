import React, { Component } from 'react';
import { Button, Text } from 'material-ui';

class LogoutLink extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.handleClick();
  }

  render() {
    return (
      <div>
        <Text type="title" colorInherit>
          Olá, {this.props.email}
          <Button contrast onClick={this.handleClick}>
            Sair
          </Button>
        </Text>
      </div>
    );
  }
}

LogoutLink.propTypes = {
  email: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};

export default LogoutLink;
