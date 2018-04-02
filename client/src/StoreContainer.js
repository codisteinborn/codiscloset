import React, { Component } from 'react';
import API from './utils/API'
import Navbr from './components/Nav';
import Foot from './components/Footer';
import ProdPrev from './components/ProductPanel/ProdPrev';
import ProdDetail from './components/ProductPanel/ProdDetail';
import { Row, Col } from 'react-bootstrap'
import CartContainer from './components/CartPanel/CartContainer'
import ProductContainer from './components/ProductPanel/ProductContainer'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class StoreContainer extends Component {
    state = {
        prodArr: [],
        cart: [],
        catArr: [],
        activeProd: '',
        modal: false,
        cartView: false,
        loginView: true,
        catView: false,
        email: '',
        username: '',
        password: '',
        hasAccount: false,
        loggedIn: false
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
        this.setState({ catArr: this.state.prodArr.filter(e => e.category === cat), catView: true })
    }

    // handleCategoryRemove = cat => {
    //     this.setState({ catArr: [], catView: false })
    // }

    handleCartAdd = id => {
        this.setState({
            cart: [...this.state.cart, this.state.activeProd],
            // prodArr: this.state.prodArr.filter(e => e !== this.state.activeProd)
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
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleSignUp = event => {
        event.preventDefault();
        API.saveUser({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }).then(this.setState({ hasAccount: true }))
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };
    handleSignIn = event => {
        event.preventDefault();
        console.log(this.state, "this state sign in")
        API.findUser({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        })
            .then(res => {
                console.log(res.data, "sign in res data");
                if (res.data.email === this.state.email) {
                    alert(`Welcome Back ${this.state.username}`);
                    this.setState({ loginView: false, loggedIn: true })
                }
                else { alert("No such account found. Please try another username/password or create an account.") }
            })
            .catch(err => console.log(err))

    };
    handleHasAccount = event => {
        this.setState({ hasAccount: !this.state.hasAccount })
    }
    // placeOrderFun validates cc and info and displays success "modal"
    // handleOrderFun = () => {

    // }

    render() {
        return (
            <div >
                <Navbr loggedIn={this.state.loggedIn} username={this.state.username} toggleHome={() => this.handleHomeView()} toggleCart={() => this.handleCartView()} toggleLogin={() => this.handleLoginView()} />
                {this.state.cartView ?
                    <CartContainer cart={this.state.cart} cartRemover={this.handleCartRemove} /> :
                    this.state.loginView ?
                        <div>
                            {!this.state.hasAccount ?
                                <Form style={{ textAlign: 'center' }}>
                                    <Input label="Email Address" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} floatingLabel={true} required={true} />
                                    <Input label="Username" name="username" required={true} value={this.state.username} onChange={this.handleInputChange} floatingLabel={true} />
                                    <Input label="Password" name="password" required={true} value={this.state.password} onChange={this.handleInputChange} floatingLabel={true} />
                                    <Button onClick={this.handleSignUp} variant="raised">Sign Up</Button>
                                    <div>Already have an account?
                    <Button onClick={this.handleHasAccount}>Sign In Here</Button>
                                    </div>
                                </Form>
                                :
                                <Form style={{ textAlign: 'center' }}>
                                    <Input label="Email Address" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} floatingLabel={true} required={true} />
                                    <Input label="Username" name="username" required={true} value={this.state.username} onChange={this.handleInputChange} floatingLabel={true} />
                                    <Input label="Password" name="password" required={true} value={this.state.password} onChange={this.handleInputChange} floatingLabel={true} />
                                    <Button onClick={this.handleSignIn} variant="raised">Sign In</Button>
                                    <div>Need to create an account?
                    <Button onClick={this.handleHasAccount}>Sign Up Here</Button>
                                    </div>
                                </Form>} </div> :
                        this.state.modal ?
                            <ProdDetail remover={this.handleProdRemove} active={this.state.activeProd} cartAdder={this.handleCartAdd} /> :
                            <ProductContainer modal={this.state.modal} prodArr={this.state.prodArr} clicker={this.handleProdSelect} catArr={this.state.catArr} catSelect={this.handleCategorySelect} catRemove={this.handleCategoryRemove} />
                }
                {/* <Foot toggleHome={() => this.handleHomeView()} toggleCart={() => this.handleCartView()} toggleLogin={() => this.handleLoginView()} /> */}
            </div>
        );
    };
}

export default StoreContainer