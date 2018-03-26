import React from "react";
import { Col, Row, Modal, Button } from 'react-bootstrap'

// handleaddtocart function which adds product to cart and disables modal

const ProdDetail = props => (
  <div>
    Product Detail: {props.name}
    <Row><img style={{ height: 450, width: 300 }} src={props.image} /></Row>
    <Button onClick={props.remover}>X</Button>
    <Button onClick={props.cartAdder}>Add to Cart</Button>
    </div>
);

export default ProdDetail;