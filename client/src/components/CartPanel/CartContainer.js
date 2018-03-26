import  React, {Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import PayForm from './PayForm'

class CartContainer extends Component {
   render(){
    return (
        <div>

          <Col sm={12} mdOffset={6} md={6}>
             <PayForm />
             </Col>
        </div>
        );
   }
  }

export default CartContainer;