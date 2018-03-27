import React from "react";
import { Col, Row, Modal, Button } from 'react-bootstrap'
import './ProdDetail.css'

// handleaddtocart function which adds product to cart and disables modal

const ProdDetail = props => (
  
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
    Product Detail: {props.active.name}
    <img className="content" style={{ height: 450, width: 300 }} src={props.active.image} />
    <Button onClick={()=>props.remover()}>X</Button>
    <Button onClick={props.cartAdder}>Add to Cart</Button>
    </div>
    </div>
    </div>

);

export default ProdDetail;