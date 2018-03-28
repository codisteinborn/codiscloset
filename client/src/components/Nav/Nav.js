import React from "react";
import { Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap'
import StoreContainer from './../../StoreContainer'
import './Nav.css'
import brand from './brand.png'


const Navbr = props => (
  // <Nav bsStyle="pills" style={{ height: 50, clear: 'both', backgroundColor: 'whitesmoke', position: 'relative' }}>
  //   <NavItem className="navBrand" onClick={props.toggleHome}>
  //     <img src={brand} alt='logo' className="logo"/>
  //   </NavItem>
  //   <MenuItem className="navRight" onClick={props.toggleLogin}>
  //     LOG IN/SIGN UP
  //     </MenuItem>
  //   <NavItem className="navRight" onClick={props.toggleCart}>
  //   <i className="fas fa-shopping-cart"></i>
  //   </NavItem >
  // </Nav>
<div>
<img src={brand} alt='logo' className="logo" onClick={props.toggleHome}/>

<div onClick={props.toggleCart} className="fas fa-shopping-cart navRight"></div>

<div className="navRight" onClick={props.toggleLogin}> LOG IN/SIGN UP</div>
</div>

);

export default Navbr;
