import React, { Component } from 'react';
import API from '../../utils/API'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import StoreContainer from './../../StoreContainer'

// class LoginContainer extends Component {
    // constructor(props, context) {
    //     super(props, context);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.state = {
    //         email: '',
    //         password: '',
    //         hasAccount: true
    //     };
    // }

    const LoginContainer = props => (
                props.hasAccount ?
                <Form>
                    {/* <Input label="Email Address" value={this.state.email} type="email" floatingLabel={true} required={true} name="email" onChange={this.handleChange} />
                    <Input label="Password" value={this.state.password} name="password" required={true} floatingLabel={true} onChange={this.handleChange} /> */}
                <Button>Sign In</Button>
                </Form> :
                <Form>
                {/* <Input label="Email Address" value={this.state.email} type="email" floatingLabel={true} required={true} name="email" onChange={this.handleChange} />
                <Input label="Password" value={this.state.password} name="password" required={true} floatingLabel={true} onChange={this.handleChange} /> */}
            <Button>Sign Up</Button>
            </Form>
        );
//     };
// };

export default LoginContainer;