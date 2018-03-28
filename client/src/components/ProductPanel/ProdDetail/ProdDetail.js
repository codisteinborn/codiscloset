import React from "react";
import { Col, Row, Modal } from 'react-bootstrap'
import Button from 'muicss/lib/react/button';
import './ProdDetail.css'

// handleaddtocart function which adds product to cart and disables modal

const ProdDetail = props => (
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <div>
          <Row>
            <Button variant="raised" onClick={() => props.remover()}>X</Button>
          </Row>
          <Row>
            <Col sm={6} md={6}>
              <img style={{ height: 450, width: 300 }} src={props.active.image} />
            </Col>
            <Col sm={6} md={6} className="details">
              <div style={{fontSize: 30}}> {props.active.name} </div>
              <div style={{fontSize: 15}}>Size: {props.active.size} </div>
              <Button variant="raised" onClick={props.cartAdder}>Add to Cart</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    </div>

    );

export default ProdDetail;