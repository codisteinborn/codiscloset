import React from "react";
import { Col, Row } from 'react-bootstrap'

const ProdPrev = props => (
  // <Row category={props.category} price={props.price}>{props.name}</Row>
  <Row style={{margin: 7, textAlign: 'center'}}>
    <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'red', padding: 10}}>Product</Col>
    <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'blue', padding: 10}}>Product</Col>
    <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'green', padding: 10}}>Product</Col>
    <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'pink', padding: 10}}>Product</Col>
    <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'orange', padding: 10}}>Product</Col>
    <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'brown', padding: 10}}>Product</Col>
    <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'gray', padding: 10}}>Product</Col>
    </Row>
);

export default ProdPrev;
