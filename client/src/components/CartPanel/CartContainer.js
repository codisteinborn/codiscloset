import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import PayForm from './PayForm'
import CartProd from './CartProd'

const CartContainer = props => (
  <div>
    <Col sm={12} md={6}>
    {props.cart.map(elem => <CartProd category={elem.category} name={elem.name} price={elem.price} key={elem._id} cartRemover={this.cartRemover} image={elem.image} id={elem._id}/>)}
    </Col>
    <Col sm={12} mdOffset={6} md={6}>
      <PayForm />
    </Col>
  </div>
);


export default CartContainer;