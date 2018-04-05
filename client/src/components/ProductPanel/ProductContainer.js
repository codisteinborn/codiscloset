import React from 'react';
import ProdPrev from './ProdPrev';
import { Col } from 'react-bootstrap';
import Jumbo from '../Jumbotron'


const ProductContainer = props => (
    props.jumboView ?
        <div>
            <Jumbo jumboHide={props.jumboHide} />
            <div>
                <Col xs={12} sm={12} md={12}>
                    {props.prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem._id} image={elem.image} clicker={props.clicker} id={elem._id}/>)}
                </Col>
            </div>
        </div> :
        <div>
        <Col xs={12} sm={12} md={12}>
            {props.prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem._id} image={elem.image} clicker={props.clicker} id={elem._id}/>)}
        </Col>
    </div>
);


export default ProductContainer;
