import React from "react";
import { Col, Row, Modal, Button } from 'react-bootstrap'

// handleaddtocart function which adds product to cart and disables modal

const CartProd = props => ( 
  <div>
    Product Detail: {props.name}
    <img style={{ height: 200, width: 100 }} src={props.image} />
    {props.price}
    <Button onClick={()=>props.cartRemover(props.id)}>Remove Item</Button>
    </div>
);

export default CartProd;