import React from "react";
import { Col, Row } from 'react-bootstrap'

const ProdPrev = props => (
   <Col smOffset={1} sm={3} xs={12} style={{height: 150, backgroundColor: 'green', padding: 10}} category={props.category} price={props.price}>{`${props.name} Price:${props.price}`}</Col>
  // <Row style={{margin: 7, textAlign: 'center'}}>
  //   <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'red', padding: 10}}>Product1</Col>
  //   <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'blue', padding: 10}}>Product2</Col>
  //   <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'green', padding: 10}}>Product3</Col>
  //   <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'pink', padding: 10}}>Product4</Col>
  //   <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'orange', padding: 10}}>Product5</Col>
  //   <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'brown', padding: 10}}>Product</Col>
  //   <Col sm={4} xs={12} style={{height: 400, backgroundColor: 'gray', padding: 10}}>Product</Col>
  //   </Row>
);

export default ProdPrev;
