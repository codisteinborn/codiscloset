import React from "react";
import { Row, Col } from 'react-bootstrap';
import StoreContainer from './../../../StoreContainer'

const CategoryPanel = () => (
  <Col sm={12} style={{textAlign: 'center'}}>
  <Row>Sort by Category:</Row>
  <Row>Bottoms </Row>
  <Row>Dresses </Row>
  <Row>Tops </Row>
  </Col>
);

export default CategoryPanel;