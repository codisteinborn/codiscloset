import React from "react";
import { Col, Row } from 'react-bootstrap'
import Button from 'muicss/lib/react/button';
// handleaddtocart function which adds product to cart and disables modal

const CartProd = props => (
    <div style={{fontSize: 22}}>
        <img style={{ height: 150, width: 100 }} src={props.image} />
        <span class="mui--divider-right"> {props.name} &nbsp;</span>
        <span> ${props.price}</span>
        <Button style={{marginLeft: 10}} variant="raised" onClick={() => props.cartRemover(props.id)}>Remove Item</Button>
    </div>
);

export default CartProd;