import React from "react";
import { Col, Row, Modal } from 'react-bootstrap'
import Button from 'muicss/lib/react/button';
import './ProdDetail.css'


const ProdDetail = props => (
<div className="static-modal">
<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Product Details.</Modal.Title>
  </Modal.Header>

  <Modal.Body>
<Row>
  <Col xs={12} sm={6} md={6}>
    <img className="detImg" src={props.active.image} />
  </Col>
  <Col xs={12} sm={6} md={6} className="details">
    <div className="prodDetName"> {props.active.name} </div>
    <div className="prodDetInfo">Size: {props.active.size} </div>
    <div className="prodDetInfo">Price: ${props.active.price} </div>
    <Button className="cartBtn" variant="raised" onClick={props.cartAdder}>Add to Cart</Button>
  </Col>
</Row>
      </Modal.Body>

  <Modal.Footer>
  <Button variant="raised" onClick={() => props.remover()}>Back to all products</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>
    );

export default ProdDetail;