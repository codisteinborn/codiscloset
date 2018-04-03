import React from "react";
import ReactDOM from 'react-dom';
import CreditCardInput from 'react-credit-card-input';
import { Col, Row, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import OrderPanel from "../OrderPanel/OrderPanel";
import CartContainer from './../CartContainer';
import './PayForm.css'


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
            zip: '',
            stateCode: '',
            orderSuccess: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleOrderFun = () => {
if(this.state.firstShipName === '' || this.state.lastShipName === ''){
    alert("Please enter valid shipping name.")
}
else if(this.state.address === ''){
    alert("Please enter valid shipping address.")
}
else if(this.state.email === '' || !this.state.email.includes("@")){
    alert("Please enter valid email address.")
}
else if(this.state.stateCode.length !== 2 ){
    alert("Please enter valid 2 letter state code.")
}
else if(this.state.zip.length !== 5){
    alert("Please enter valid 5 digit numeric zip code.")
}
else if(this.state.firstBillName === '' || this.state.lastBillName === ''){
    alert("Please enter valid billing name.")
}
// else if(this.state.cardNumber.length < 16){
//     alert("Please enter a valid credit card number.")
// }
else if(this.state.expiry.length < 4){
    alert("Please enter a valid expiration date.")
}
else if(this.state.cvc.length < 3){
    alert("Please enter a valid CVC.")
}
else{this.setState({orderSuccess: true})}
}

    render() {
        return (
            !this.state.orderSuccess ?
            <div className='pmtForm'>
                <Form className="Shipping">
                    <legend style={{ fontSize: 18 }}>Shipping Info</legend>
                    <Input label="First Name" value={this.state.firstShipName} name="firstShipName" required={true} floatingLabel={true} onChange={this.handleChange} />
                    <Input label="Last Name" value={this.state.lastShipName} name="lastShipName" required={true} floatingLabel={true} onChange={this.handleChange} />
                    <Input label="Email Address" value={this.state.email} type="email" floatingLabel={true} required={true} name="email" onChange={this.handleChange} />
                    <Input label="Address Line 1" value={this.state.address} name="address" floatingLabel={true} required={true} onChange={this.handleChange} />
                    <Input label="State" value={this.state.stateCode} name="stateCode" floatingLabel={true} required={true} onChange={this.handleChange} />
                    <Input label="Zip" value={this.state.zip} name="zip" floatingLabel={true} required={true} onChange={this.handleChange} />
                </Form>
                <Form className="Billing">
                    <legend style={{ fontSize: 18 }}>Billing Info</legend>
                    <Input label="First Name" value={this.state.firstBillName} name="firstBillName" floatingLabel={true} required={true} onChange={this.handleChange} />
                    <Input label="Last Name" value={this.state.lastBillName} name="lastBillName" floatingLabel={true} required={true} onChange={this.handleChange} />
                    <CreditCardInput
                        cardNumberInputProps={{ value: this.state.cardNumber, name: "cardNumber", onChange: this.handleChange }}
                        cardExpiryInputProps={{ value: this.state.expiry, name:"expiry", onChange: this.handleChange }}
                        cardCVCInputProps={{ value: this.state.cvc, name:"cvc", onChange: this.handleChange }}
                        fieldClassName="input"
                    />
                </Form>
                <Button onClick={this.handleOrderFun} variant="raised">Place Order</Button>
            </div> :
            <OrderPanel email={this.state.email}/>
        );
    }
}

export default PayForm;