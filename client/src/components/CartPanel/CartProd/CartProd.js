import React from "react";
// import { Col, Row } from 'react-bootstrap'
import Button from 'muicss/lib/react/button';

const CartProd = props => (
    <div style={{fontSize: 22}}>
        <img style={{ height: 150, width: 100 }} src={props.image} alt="cartImg" />
        <span className="mui--divider-right"> {props.name} &nbsp;</span>
        <span> ${props.price}</span>
        <Button style={{marginLeft: 10}} variant="raised" onClick={() => props.cartRemover(props.id)}>Remove Item</Button>
    </div>
);

export default CartProd;