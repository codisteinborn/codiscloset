import React, { Component } from 'react';
import API from '../../utils/API'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import StoreContainer from './../../StoreContainer'

const LoginContainer = props => (
    props.hasAccount ?
        <Form>
            <Input label="Email Address" type="email" floatingLabel={true} required={true} />
            <Input label="Password" name="pswd" required={true} floatingLabel={true} />
            <Button>Sign In</Button>
        </Form> :
        <Form>
            <Input label="Email Address" type="email" floatingLabel={true} required={true} />
            <Input label="Password" name="pswd" required={true} floatingLabel={true} />
            <Button>Sign Up</Button>
        </Form>
);


export default LoginContainer;