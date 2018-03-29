import React from "react";
import { Col, Row } from 'react-bootstrap'
import Button from 'muicss/lib/react/button';
import './ProdDetail.css'


const ProdDetail = props => (
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <div>
          <Row>
            <Button variant="raised" onClick={() => props.remover()}>X</Button>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <img style={{ height: 450, width: 300 }} src={props.active.image} />
            </Col>
            <Col xs={12} sm={6} md={6} className="details">
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