import React from "react";
import { Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap'
import StoreContainer from './../../StoreContainer'
import './Nav.css'


const Navbr = props => (
<div id="nav">
<div className="navBrand" onClick={props.toggleHome}>codi's closet</div>

<div onClick={props.toggleCart} className=" navRight">CART</div>
   {/* <i className="fas fa-shopping-cart"></i> */}
<div className="navRight" onClick={props.toggleLogin}> LOG IN/SIGN UP</div>
</div>

);

export default Navbr;
