import React, { Component } from 'react';

import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';

class Contact extends Component {
  state = {
    keyword : '',
    selectedKey : -1,
    contactData : [{
      name : 'David',
      phone : '010-5475-9150'
    }, {
      name : 'Albert',
      phone : '010-7233-9150'
    }, {
      name : 'John',
      phone : '010-5185-5949'
    }, {
      name : 'Wade',
      phone : '010-9022-9150'
    }, {
      name : 'Kim',
      Phone : '010-3709-0302'
    }]
  }

  _nameClick = (key) => {
    this.setState({
      selectedKey : key
    });
  }

  _searchContact = (e) => {
    this.setState({
      keyword : e.target.value
    });
  }
  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase()
          .indexOf(this.state.keyword.toLowerCase()) > - 1;
        }
      );
      return data.map(
        (contact, i) => {
          return (<ContactInfo 
            contact={contact} 
            key={i}
            onClick={()=>this._nameClick(i)} 
            />);
        }
      );
    }
    return(
      <div>
          <h1>Contact</h1>
          <input
                name="keyword"
                placeholder="Search"
                onChange={this._searchContact}
          />
          <div>{mapToComponents(this.state.contactData)}</div>
          <ContactDetail
              isSelected = {this.state.selectedKey != -1}
                contact = {this.state.contactData[this.state.selectedKey]}
          />
        </div>
  )
  }
}


export default Contact;