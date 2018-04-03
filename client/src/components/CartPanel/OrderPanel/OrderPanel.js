import React from "react";
import ReactDOM from 'react-dom';
import PayForm from './../PayForm/PayForm'
import Button from 'muicss/lib/react/button';
import { Modal } from "react-bootstrap";
import './OrderPanel.css'

var confirmCode = Math.floor(Math.random() * 200000);

const OrderPanel = props => (
    <div className="static-modal">
  <Modal.Dialog className="orderModal">
    <Modal.Header>
      <Modal.Title>Your order has been placed!</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <div>Order #: {confirmCode}. </div>
        <div>An email will be sent to {props.email} when your order ships!</div>
        </Modal.Body>

    <Modal.Footer>
      <Button>Back to Home</Button>
    </Modal.Footer>
  </Modal.Dialog>
</div>
);

export default OrderPanel;