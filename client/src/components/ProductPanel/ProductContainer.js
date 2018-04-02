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
            <div>
                {/* <Col xs={0} sm={0} md={2}>
                    <CategoryPanel xs={0} sm={0} md={2} catSelect={props.catSelect} catRemove={props.catRemove} />
                </Col> */}
                <Col xs={12} sm={12} md={12}>
                    {props.prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem._id} image={elem.image} clicker={props.clicker} id={elem._id}/>)}
                </Col>
            </div>
        </div> 
         
);

export default ProductContainer;
