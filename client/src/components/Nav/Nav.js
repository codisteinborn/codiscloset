import React from "react";
import { Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap'
import StoreContainer from './../../StoreContainer'


const Navbr = props => (
  <Nav bsStyle="pills" style={{ height: 80, clear: 'both', backgroundColor: 'pink' }}>
    <NavItem href="\" style={{float: 'left', fontSize: 40}} onClick={props.toggleHome}>
      Codi's Closet
    </NavItem>
    <NavItem style={{float: 'right', fontSize: 20}} onClick={props.toggleLogin}>
      Log In/Sign Up
      </NavItem>
    <NavItem style={{float: 'right', fontSize: 25}} onClick={props.toggleCart}>
    <i className="fas fa-shopping-cart"></i>
    </NavItem >
  </Nav>

);

export default Navbr;
