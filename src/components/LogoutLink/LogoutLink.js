import React, { Component } from 'react';
import { FlatButton } from 'material-ui';

class LogoutLink extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.handleClick();
  }

  render() {
    return (
      <div>
        <FlatButton 
          onClick={this.handleClick}
          label="Sair"
          primary
        />
      </div>
    );
  }
}

LogoutLink.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

export default LogoutLink;
