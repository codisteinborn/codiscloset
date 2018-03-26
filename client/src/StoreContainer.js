import React, { Component } from 'react';
import API from '../../utils/API'
import ProdPrev from './ProdPrev';
import ProdDetail from './ProdDetail';
import { Row, Col } from 'react-bootstrap'
import CartContainer from './components/.CartPanel/CartContainer'
import ProductContainer from './components/.ProductPanel/ProductContainer'

class StoreContainer extends Component {
    state = {
        prodArr: [],
        modal: false,
        cart: [],
        cartView: false
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
    handleProdSelect = id => {
        API.getProd(id)
            .then(res =>
                this.setState({ prodArr: res.data, modal: !this.state.modal })
            )
            .catch(err => console.log(err));
    }

    // handleproductremove disables the modal
    handleProdRemove() {
        API.getProds()
            .then(res =>
                this.setState({ prodArr: res.data, modal: !this.state.modal })
            )
            .catch(err => console.log(err));
    }

    handleCartAdd = () => {
        this.setState({ cart: this.state.prodArr })
    }

    render() {
        return (
           this.state.cartView ?
                    <CartContainer /> :
                    <ProductContainer />
        );
    };
}

export default StoreContainer