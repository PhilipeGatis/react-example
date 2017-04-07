import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact Page</h1>
        <p>id: {this.props.contact.id}</p>
        <p>name: {this.props.contact.name}</p>
        <p>email: {this.props.contact.email}</p>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired,
};

export default Contact;
