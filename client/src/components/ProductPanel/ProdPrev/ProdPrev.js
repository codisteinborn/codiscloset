import React from "react";
import { Col, Row } from 'react-bootstrap'
import Button from 'muicss/lib/react/button';
import './ProdPrev.css'

const ProdPrev = props => (
  <Col md={4} sm={6} xs={12} className="pp" category={props.category} price={props.price} name={props.name} key={props.id}>
    <Row><img onClick={() => props.clicker(props.id)} className="prodImg" src={props.image} /></Row>
    <Row className="prodInfo">{props.name} ${props.price}</Row>
    <Button className="viewBtn" variant="raised" key={props.id} onClick={() => props.clicker(props.id)}>View Details </Button>
  </Col>
);

export default ProdPrev;
