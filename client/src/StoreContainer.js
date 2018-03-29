import React, { Component } from 'react';
import API from './utils/API'
import Navbr from './components/Nav';
import ProdPrev from './components/ProductPanel/ProdPrev';
import ProdDetail from './components/ProductPanel/ProdDetail';
import { Row, Col } from 'react-bootstrap'
import CartContainer from './components/CartPanel/CartContainer'
import ProductContainer from './components/ProductPanel/ProductContainer'
import LoginContainer from './components/LoginPanel/LoginContainer'

class StoreContainer extends Component {
    state = {
        prodArr: [],
        cart: [],
        catArr: [],
        modal: false,
        cartView: false,
        loginView: false,
        email: '',
        password: '',
        hasAccount: false,
        activeProd: '',
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
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

    handleProdSelect = id => {
        this.setState({ activeProd: this.state.prodArr.find(e => e._id === id), modal: true })
    }
    handleProdRemove = () => {
        this.setState({ modal: false, activeProd: '' })
    }

    handleCategorySelect = cat => {
        this.setState({ catArr: this.state.prodArr.find(e => e.category === cat), catView: true })
    }

    handleCategoryRemove = cat => {
        this.setState({ catArr: [], catView: false })
    }

    handleCartAdd = id => {
        this.setState({
            cart: [...this.state.cart, this.state.activeProd],
            // prodArr: this.state.prodArr.filter(e => e._id !== id) 
        })
    }
    handleCartRemove = id => {
        this.setState({ cart: this.state.cart.filter(e => e._id !== id) })
    }
    handleCartView = () => {
        this.setState({ cartView: true, modal: false, loginView: false })
    }
    handleLoginView = () => {
        this.setState({ loginView: true, modal: false, cartView: false })
    }
    handleHomeView = () => {
        this.setState({ loginView: false, modal: false, cartView: false })
    }

    // placeOrderFun validates cc and info and displays success "modal"

    render() {
        return (
            <div style={{ fontFamily: 'Poppins' }}>
                <Navbr toggleHome={() => this.handleHomeView()} toggleCart={() => this.handleCartView()} toggleLogin={() => this.handleLoginView()} />
                {this.state.cartView ?
                    <CartContainer cart={this.state.cart} cartRemover={this.handleCartRemove} /> :
                    this.state.loginView ?
                        <LoginContainer handleChange={this.handleChange} hasAccount={this.state.hasAccount} /> :
                        this.state.modal ?
                            <ProdDetail remover={this.handleProdRemove} active={this.state.activeProd} cartAdder={this.handleCartAdd} /> :
                            <ProductContainer modal={this.state.modal} prodArr={this.state.prodArr} clicker={this.handleProdSelect} catSelect={this.handleCategorySelect} catRemove={this.handleCategoryRemove} />
                }
            </div>
        );
    };
}

export default StoreContainer