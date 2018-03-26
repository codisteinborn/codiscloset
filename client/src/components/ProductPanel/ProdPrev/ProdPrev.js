import React from "react";
import { Col, Row, Button } from 'react-bootstrap'

const ProdPrev = props => (
  <Col md={4} sm={6} xs={12} style={{ padding: 5 }} category={props.category} price={props.price} name={props.name} key={props.id}>
    <Row><img style={{ height: 450, width: 300 }} src={props.image} /></Row>
    <Row>{props.name} ${props.price}</Row>
    <Button key={props.id} onClick={props.clicker}>View Details </Button>
  </Col>
);

export default ProdPrev;
