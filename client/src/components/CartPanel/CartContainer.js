import React from 'react';
import {Col, Row } from 'react-bootstrap'
import PayForm from './PayForm'
import CartProd from './CartProd'

const CartContainer = props => (
  props.cart.length > 0 ?
  <div>
    <Col sm={12} md={6}>
    {props.cart.map(elem => <CartProd category={elem.category} name={elem.name} price={elem.price} key={elem._id} cartRemover={elem.cartRemover} image={elem.image} id={elem._id}/>)}
    </Col>
    <Col sm={12} md={6}>
      <PayForm />
    </Col>
  </div> :
  <Row style={{ fontSize: 24}} xs={12} sm={12} md={12}>Your cart is currently empty!</Row>
);

export default CartContainer;