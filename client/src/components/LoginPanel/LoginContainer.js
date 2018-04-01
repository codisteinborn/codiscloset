import React, { Component } from 'react';
import API from '../../utils/API'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import StoreContainer from './../../StoreContainer'

class LoginContainer extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        hasAccount: false
    };

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
                    this.setState({ hasAccount: true })
                }
                else { alert("No such account found. Please try another username/password or create an account.") }
            })
            .catch(err => console.log(err))

    };
    handleHasAccount = event => {
        this.setState({ hasAccount: !this.state.hasAccount })
    }

    render() {
        return (
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
                    </Form>}
            </div>
        )
    }
}


export default LoginContainer;