import React from "react";
import ReactDOM from 'react-dom';
import CreditCardInput from 'react-credit-card-input';
import { Col, Row, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

// acceptmpt function which gives you success msg w/ order # and disables modal

class PayForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            firstBillName: '',
            lastBillName: '',
            cardNumber: '',
            expiry: '',
            cvc: '',
            firstShipName: '',
            lastShipName: '',
            address: '',
            email: '',
            zip:'',
            stateCode: ''
        };
    }

    // getValidationState() {
    //     const length = this.state.value.length;
    //     const val = this.state.value
    //     if (val !== Number) return 'error';
    //     else if (length < 16) return 'warning';
    //     else if (length === 16) return 'success';
    //     return null;
    // }

    handleChange =(e) => {
        const {name, value} = e.target;
        this.setState({ 
            [name]:value
            // firstBillName: e.target.firstBillName,
            // lastBillName: e.target.lastBillName,
            // cardNumber: e.target.cardNumber,
            // expiry: e.target.expiry,
            // cvc: e.target.cvc,
            // firstShipName: e.target.firstShipName,
            // lastShipName: e.target.lastShipName,
            // address: e.target.address,
            // email: e.target.email,
            // stateCode: e.target.stateCode,
            // zip: e.target.zip
         });   
         console.log(this.state)
    }

    render() {
        return (
            <div>
                <Form className="Billing">
                    <legend>Billing Info</legend>
                        <Input label="First Name" value={this.state.firstBillName} name="firstBillName" floatingLabel={true} required={true} onChange={this.handleChange} />
                        <Input label="Last Name" value={this.state.lastBillName} name="lastBillName" floatingLabel={true} required={true} onChange={this.handleChange} />
                        <CreditCardInput
                            cardNumberInputProps={{ value: this.state.cardNumber, onChange: this.handleChange }}
                            cardExpiryInputProps={{ value: this.state.expiry, onChange: this.handleChange }}
                            cardCVCInputProps={{ value: this.state.cvc, onChange: this.handleChange }}
                            fieldClassName="input"
                        />
                </Form>
                <Form className="Shipping">
                    <legend>Shipping Info</legend>
                    <Input label="First Name" value={this.state.firstShipName} name="firstShipName" required={true} floatingLabel={true} onChange={this.handleChange} />
                    <Input label="Last Name" value={this.state.lastShipName} name="lastShipName" required={true} floatingLabel={true} onChange={this.handleChange} />
                    <Input label="Email Address" value={this.state.email} type="email" floatingLabel={true} required={true} name="email" onChange={this.handleChange} />
                    <Input label="Address Line 1" value={this.state.address} name="address" floatingLabel={true} required={true} onChange={this.handleChange}/>
                    <Input label="State" value={this.state.stateCode} name="stateCode" floatingLabel={true} required={true} onChange={this.handleChange} />
                    <Input label="Zip" value={this.state.zip} name="zip" floatingLabel={true} required={true} onChange={this.handleChange} />
                    <Button variant="raised">Place Order</Button>
                </Form>
            </div>
        );
    }
}

export default PayForm;