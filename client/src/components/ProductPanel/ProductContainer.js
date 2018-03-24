import React, { Component } from 'react';
import API from '../../utils/API'
import ProdPrev from './ProdPrev';
import ProdDetail from './ProdDetail';
import { Row, Col } from 'react-bootstrap'
import CategoryPanel from './CategoryPanel/CategoryPanel';
import Jumbo from '../Jumbotron'

class ProductContainer extends Component {
    state = {
        prodArr: [],
        modal: false
    }

    componentDidMount() {
        this.loadProds();
    }

    loadProds = () => {
        API.getProds()
            .then(res =>
                this.setState({ prodArr: res.data })
            )
            .catch(err => console.log(err));
    };

    // function which will enable productdetail modal on that productprev
    handleProdSelect = () => {
        this.setState({ modal: !this.state.modal })
    }

    // handleproductremove disables the modal

    render() {
        return (
                this.state.modal ?
                <ProdDetail/> :
                <div>
            <Jumbo/>
            <Row>
                <Col xs={0} sm={3} md={3}>
                    <CategoryPanel />
                </Col>
                <Col xs={12} sm={9} md={9}>
                    {this.state.prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem.id} image={elem.image} />)}
                </Col>
            </Row>
                </div>
        );
    };
}

export default ProductContainer;