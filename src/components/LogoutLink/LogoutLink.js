import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { FaSignOut } from 'react-icons/lib/fa';

const labelStyle = {
  color: 'white',
};

class LogoutLink extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.handleClick();
  }

  render() {
    return (
      <FlatButton
        labelStyle={labelStyle}
        primary
        onClick={this.handleClick}
        icon={<FaSignOut style={labelStyle} />}
        labelPosition="before"
        label="Sair"
      />
    );
  }
}

LogoutLink.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

export default LogoutLink;
