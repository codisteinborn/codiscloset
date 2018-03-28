import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import PayForm from './PayForm'
import CartProd from './CartProd'
// import StoreContainer from './../../StoreContainer'

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
  <div>No items in your cart yet! </div>
);

export default CartContainer;