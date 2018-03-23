import React, { Component } from 'react';
import Navbr from './components/Nav'
import Jumbo from './components/Jumbotron'
import Foot from './components/Footer'
import ProdPrev from './components/ProductPanel/ProdPrev';
import ProductContainer from './components/ProductPanel/ProductContainer';
import PayForm from './components/CartPanel/PayForm'
import CartContainer from './components/CartPanel/CartContainer';

const App = () => (
      <div className="App">
        <Navbr />
        <Jumbo />
        <ProdPrev />
        <ProductContainer/>
        <CartContainer/>
        <Foot/>
      </div>
    );


export default App;
