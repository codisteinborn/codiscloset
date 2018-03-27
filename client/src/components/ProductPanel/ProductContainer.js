import React, { Component } from 'react';
import API from '../../utils/API'
import ProdPrev from './ProdPrev';
import ProdDetail from './ProdDetail';
import { Row, Col } from 'react-bootstrap'
import CategoryPanel from './CategoryPanel';
import Jumbo from '../Jumbotron'


const ProductContainer = props => (
        <div>
            <Jumbo />
            <Row>
                <Col xs={0} sm={3} md={3}>
                    <CategoryPanel />
                </Col>
                <Col xs={12} sm={9} md={9}>
                    {props.prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem._id} image={elem.image} clicker={props.clicker} id={elem._id}/>)}
                </Col>
            </Row>
        </div> 
         
);

export default ProductContainer;
