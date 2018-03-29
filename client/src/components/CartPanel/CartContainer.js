import React from 'react';
import {Col } from 'react-bootstrap'
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
  <div style={{textAlign: 'center', fontSize: 24}} xs={12}>Your cart is currently empty!</div>
);

export default CartContainer;