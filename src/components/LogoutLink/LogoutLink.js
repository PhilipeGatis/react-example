import React, { Component } from 'react';

class LogoutLink extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.handleClick();
  }

  render() {
    return (
      <span>
       {this.props.email}{' '}(<a href="#" onClick={this.handleClick}>Sair</a>)
      </span>
    );
  }
}

LogoutLink.propTypes = {
  email: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};

export default LogoutLink;
