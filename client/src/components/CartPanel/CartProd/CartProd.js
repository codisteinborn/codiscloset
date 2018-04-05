import React from "react";
import { Row } from 'react-bootstrap'
import Button from 'muicss/lib/react/button';
import './CartProd.css'

const CartProd = props => (
    <div className="cartProds">
    <Row>
        <img style={{ height: 150, width: 100 }} src={props.image} alt="cartImg" />
        <span className="mui--divider-right"> {props.name} &nbsp;</span>
        <span> ${props.price}</span>
        </Row>
        <Row>
        <Button style={{marginLeft: 10}} variant="raised" onClick={() => props.cartRemover(props.id)}>Remove Item</Button>
    </Row>
    </div>
);

export default CartProd;