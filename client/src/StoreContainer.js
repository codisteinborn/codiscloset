import React, { Component } from 'react';
import API from './utils/API'
import Navbr from './components/Nav';
import Foot from './components/Footer';
import ProdDetail from './components/ProductPanel/ProdDetail';
import CartContainer from './components/CartPanel/CartContainer'
import ProductContainer from './components/ProductPanel/ProductContainer'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class StoreContainer extends Component {
    state = {
        prodArr: [],
        cart: [],
        activeProd: '',
        catArr: [],
        modal: false,
        cartView: false,
        loginView: true,
        email: '',
        username: '',
        password: '',
        hasAccount: false,
        loggedIn: false,
        jumboView: true
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    /**
     * this function loads all products when the page mounts
     */
    componentDidMount() {
        this.loadProds();
    }
    /**
     * this function loads all the products from the database and sets the state
     */
    loadProds = () => {
        API.getProds()
            .then(res =>
                this.setState({ prodArr: res.data })
            )
            .catch(err => console.log(err));
    };
    /**
     * this function hides the jumbotron when the user clicks the "shop now" button
     */
    handleJumboHide = () => {
        this.setState({ jumboView: false })
    }
    /**
     * this function displays a modal with specific product details when you click on an individual product
     */
    handleProdSelect = id => {
        this.setState({ activeProd: this.state.prodArr.find(e => e._id === id), modal: true })
    }
    /**
     * this function returns a user to view all products after they are done viewing a single product's details
     */
    handleProdRemove = () => {
        this.setState({ modal: false, activeProd: '' })
    }
    /**
     * this function adds a product to the user's cart when they click the 'add to cart' button
     */
    handleCartAdd = id => {
        this.setState({ cart: [...this.state.cart, this.state.activeProd] })
    }
    /**
     * this function removes a product from the user's cart when they click the 'remove' button
     */
    handleCartRemove = id => {
        this.setState({ cart: this.state.cart.filter(e => e._id !== id) })
    }
    /**
     * this function takes a user to their shopping cart
     */
    handleCartView = () => {
        this.setState({ cartView: true, modal: false, loginView: false })
    }
    /**
     * this function takes a user to the log in/ sign up page
     */
    handleLoginView = () => {
        this.setState({ loginView: true, modal: false, cartView: false })
    }
    /**
     * this function takes a user back to the homepage to view available products
     */
    handleHomeView = () => {
        this.setState({ loginView: false, modal: false, cartView: false, jumboView: true })
    }
    /**
     * this function saves a user's information to the database when they sign up for an account
     */
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
    /**
     * this function checks the database for matching user information
     */
    handleSignIn = event => {
        event.preventDefault();
        API.findUser({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        })
            .then(res => {
                if (res.data.email === this.state.email) {
                    this.setState({ loginView: false, loggedIn: true })
                }
                else { alert("No such account found. Please try another username/password or create an account.") }
            })
            .catch(err => console.log(err))

    };
    /**
     * this function switches a user between a sign in and sign up form
     */
    handleHasAccount = event => {
        this.setState({ hasAccount: !this.state.hasAccount })
    }

    render() {
        return (
            <div>
                <div className='storeCont'>
                    <Navbr loggedIn={this.state.loggedIn} username={this.state.username} toggleHome={() => this.handleHomeView()} toggleCart={() => this.handleCartView()} toggleLogin={() => this.handleLoginView()} />
                    {this.state.cartView ?
                        <CartContainer homeClick={() => this.handleHomeView()} cart={this.state.cart} cartRemover={this.handleCartRemove} /> :
                        this.state.loginView ?
                            <div style={{ textAlign: 'center' }}>
                                {!this.state.hasAccount ?
                                    <div>
                                        <Form style={{ textAlign: 'center' }}>
                                            <Input label="Email Address" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} floatingLabel={true} required={true} />
                                            <Input label="Username" name="username" required={true} value={this.state.username} onChange={this.handleInputChange} floatingLabel={true} />
                                            <Input label="Password" name="password" type="password" required={true} value={this.state.password} onChange={this.handleInputChange} floatingLabel={true} />
                                            <Button onClick={this.handleSignUp} variant="raised">Sign Up</Button>
                                        </Form>
                                        <div>Already have an account?
                                    <Button onClick={this.handleHasAccount}>Sign In Here</Button> </div>
                                        <Button onClick={this.handleHomeView}>Continue As Guest</Button>
                                    </div>

                                    :
                                    <div>
                                        <Form >
                                            <Input label="Email Address" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} floatingLabel={true} required={true} />
                                            <Input label="Username" name="username" required={true} value={this.state.username} onChange={this.handleInputChange} floatingLabel={true} />
                                            <Input label="Password" type="password" name="password" required={true} value={this.state.password} onChange={this.handleInputChange} floatingLabel={true} />
                                            <Button onClick={this.handleSignIn} variant="raised">Sign In</Button>
                                        </Form>
                                        <div>Need to create an account?
                                    <Button onClick={this.handleHasAccount}>Sign Up Here</Button> </div>
                                        <Button onClick={this.handleHomeView}>Continue As Guest</Button>
                                    </div>} </div> :
                            this.state.modal ?
                                <ProdDetail remover={this.handleProdRemove} active={this.state.activeProd} cartAdder={this.handleCartAdd} /> :
                                <ProductContainer jumboHide={this.handleJumboHide} jumboView={this.state.jumboView} modal={this.state.modal} prodArr={this.state.prodArr} clicker={this.handleProdSelect} />
                    }
                </div>
                <Foot toggleHome={() => this.handleHomeView()} toggleCart={() => this.handleCartView()} toggleLogin={() => this.handleLoginView()} />
            </div>
        );
    };
}

export default StoreContainer