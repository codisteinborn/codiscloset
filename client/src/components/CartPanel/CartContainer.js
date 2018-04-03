import React from 'react';
import {Col, Row } from 'react-bootstrap'
import PayForm from './PayForm'
import CartProd from './CartProd'


const CartContainer = props => {
  function total(){
    var prices = props.cart.map(elem => elem.price);
    return prices.reduce((total, price) => total + price, 0);
  }
 return (props.cart.length > 0 ?
  <div>
    <Row>
    <Col sm={12} md={5} lg={6}>
    {props.cart.map(elem => <CartProd category={elem.category} name={elem.name} price={elem.price} key={elem._id} cartRemover={props.cartRemover} image={elem.image} id={elem._id}/>)}
    <div className="tot">Your Total: ${total()}</div>
    </Col>
    <Col sm={12} md={6} lg={6}>
      <PayForm/>
    </Col>
    </Row>
  </div> :
  <Row style={{ fontSize: 22, textAlign: 'center', padding: 25}} xs={12} sm={12} md={12}>Your cart is currently empty!</Row>
);
};
export default CartContainer;