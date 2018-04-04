import React from "react";
import { Row, Col } from 'react-bootstrap'
import './Footer.css'

const Foot = props => (
  <div className="footer">
    <div className="footBrand">codi's closet</div>
    <Row>
      <Col xs={12} sm={4}>
        <div className="footItem" onClick={props.toggleHome}>Shop Now</div>
      </Col>
      <Col xs={12} sm={4}>
        <div className="footItem" onClick={props.toggleLogin}>Log in/ Sign up</div>
      </Col>
      <Col xs={12} sm={4}>
        <div className="footItem" onClick={props.toggleCart}>View Cart</div>
      </Col>
    </Row>
    <div style={{ textAlign: 'center',}}>*codi's closet is currently set up as a template for an online boutique. The items displayed are not for sale, and the shipping and billing form is only for demonstration purposes. It does not process or save any credit card information and the order confirmation is fictional.</div>
    <div style={{ textAlign: 'center', fontSize: 16 }}> &copy; 2018 </div>
  </div>
);

export default Foot;
