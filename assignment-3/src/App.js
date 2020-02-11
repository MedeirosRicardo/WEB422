/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ricardo Medeiros Student ID: 135745180 Date: February 10, 2020
*  Heroku Link: 
*
********************************************************************************/

import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, Dropdown, FormGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// Create App component
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentlyViewed: [],
      searchId: ""
    };
    
    // Bind the method inside the constructor
    this.viewedSale = this.viewedSale.bind(this);
    this.updateSearchId = this.updateSearchId.bind(this);

  }

  // Method implementation
  viewedSale(id) {
    this.setState(() => {
      if (this.state.recentlyViewed.indexOf(id) === -1) {
        this.state.recentlyViewed.push(id);
      }
    });
  }

  // Method implementation
  updateSearchId(e) {
    this.setState({
      searchId: e.target.value
    });
  }


  render() {
    return (
      <div><h1>React is Working</h1></div>
    );
  }
}

export default App;