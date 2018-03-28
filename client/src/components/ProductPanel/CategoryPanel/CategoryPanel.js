import React from "react";
import { Row, Col } from 'react-bootstrap';
import StoreContainer from './../../../StoreContainer'

const CategoryPanel = () => (
  <Col sm={12} style={{textAlign: 'center', fontSize:16}}>
  <Row style={{fontSize:18, marginBottom: 15}}>Sort by Category:</Row>
  <Row style={{marginBottom: 12}}>Bottoms </Row>
  <Row style={{marginBottom: 12}}>Dresses </Row>
  <Row style={{marginBottom: 12}}>Tops </Row>
  </Col>
);

export default CategoryPanel;