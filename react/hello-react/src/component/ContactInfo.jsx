import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactInfo extends Component {
  render() {
    return (
      <div onclick={this.props.contact.name}>{this.props.contact.name}</div>
    );
  }
}

ContactInfo.defaultProps = {
  onclick: ()=> {
    console.log('there is onClick function');
  }
}

ContactInfo.propTypes = {
  onClick : PropTypes.func.isRequired
};