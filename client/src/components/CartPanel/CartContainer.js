import  React, {Component } from 'react';
import { Row } from 'react-bootstrap'
import PayForm from './PayForm'

class CartContainer extends Component {
   render(){
    return (
        <div>
             <PayForm />
        </div>
        );
   }
  }

// const CartContainer = props => (
//     <PayForm />
// );

export default CartContainer;