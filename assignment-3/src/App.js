import React from "react";
import "./App.css";
import { Navbar, Nav, NavItem, NavDropdown, Dropdown, FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import { Link, Switch, Redirect, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

// Class component
class App extends React.Component {

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
      return (this.state.recentlyViewed);
    });
  }

  // Method implementation
  updateSearchId(e) {
    this.setState(() => {
      this.searchId = e.target.value;
    });
    return (this.searchId);
  }

  // Render function
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect staticTop>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>
                WEB422 - Sales
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/Sales">
                <NavItem>
                  All Sales
                </NavItem>
              </LinkContainer>
              <NavDropdown title="Previously Viewed" id="basic-nav-dropdown">
                {this.state.recentlyViewed.length > 0 ?
                  this.state.recentlyViewed.map((id, index) => (
                    <LinkContainer to={`/Sale/${id}`} key={index}>
                      <Dropdown>
                        Sale: {id}
                      </Dropdown>
                    </LinkContainer>
                  )) :
                  <Dropdown>...</Dropdown>}
              </NavDropdown>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" onChange={this.updateSearchId} placeholder="Sale ID" />
              </FormGroup>{''}
              <Link className="btn btn-default" to={"/Sale/" + this.state.searchId}>
                Search
              </Link>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;