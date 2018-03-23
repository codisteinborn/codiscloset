import React from "react";
import { Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap'


const Navbr = props => (
  <Nav bsStyle="pills" style={{ height: 80, clear: 'both', backgroundColor: 'pink' }}>
    <NavItem href="\" style={{float: 'left', fontSize: 40}} >
      Codi's Closet
    </NavItem>
    <NavItem style={{float: 'right', fontSize: 25}}>
    <i className="fas fa-shopping-cart"></i>
    </NavItem >
    <NavItem style={{float: 'right', fontSize: 25}}>
    <i className="fas fa-user"></i>
    </NavItem>
  </Nav>

  // <Navbar className="navbar" staticTop collapseOnSelect style={{ height: 100, margin:0, clear: 'both', backgroundColor: 'pink' }}>
  //   {/* <Navbar.Header style={{backgroundColor: 'pink' }}> */}
  //     <Navbar.Brand style={{backgroundColor: 'pink' }}>
  //       <a href="#">Codi's Closet</a>
  //     </Navbar.Brand>
  //     <Navbar.Toggle style={{backgroundColor: 'pink' }} />
  //   {/* </Navbar.Header> */}
  //   <Navbar.Collapse style={{backgroundColor: 'pink' }}>
  //     <Nav pullRight style={{backgroundColor: 'pink' }}>
  //     <NavItem eventKey={2} href="#">
  //         <i className="fas fa-user"></i>
  //       </NavItem>
  //     <NavItem eventKey={1} href="#">
  //         <i className="fas fa-shopping-cart"></i>
  //       </NavItem>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>

);

export default Navbr;
