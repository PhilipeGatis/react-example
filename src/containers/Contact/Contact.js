import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Error from './../../components/Error/Error';
import Loading from './../../components/Loading/Loading';
import ContactComponent from './../../pages/Contact/Contact';
import * as actions from './../../actions/contact';

class Contact extends Component {
   componentDidMount() {
    const id = 1;
    this.props.actions.getContact(id);
  }

  render() {
    return this.props.contact.error ?
      <Error error={this.props.contact.error}/>
    : this.props.contact.isLoading ?
      <Loading/>
    : <ContactComponent
        contact={this.props.contact.model}
      />
  }
}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    contact: state.contact
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
