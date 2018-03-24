import React from "react";
import { Col, Row } from 'react-bootstrap'

const ProdPrev = props => (
  <Col md={4} sm={6} xs={12} style={{ padding: 5 }} category={props.category} price={props.price} name={props.name}>
    <Row><img style={{ height: 450, width: 300 }} src={props.image} /></Row>
    <Row>{props.name} ${props.price}</Row>
  </Col>
);

export default ProdPrev;
