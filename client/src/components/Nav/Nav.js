import React from "react";
import { Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap'
import StoreContainer from './../../StoreContainer'
import './Nav.css'


const Navbr = props => (
  <Nav bsStyle="pills" style={{ height: 70, clear: 'both', backgroundColor: 'whitesmoke' }}>
    <NavItem className="navBrand" onClick={props.toggleHome}>
      Codi's Closet
    </NavItem>
    <NavItem className="navRight" onClick={props.toggleLogin}>
      Log In/Sign Up
      </NavItem>
    <NavItem className="navRight" onClick={props.toggleCart}>
    <i className="fas fa-shopping-cart"></i>
    </NavItem >
  </Nav>

);

export default Navbr;
