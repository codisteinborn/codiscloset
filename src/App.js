import React, { Component } from 'react';
import './App.css';
import Navbr from './components/Nav'
import Jumbo from './components/Jumbotron'
import Foot from './components/Footer'
import ProdPrev from './components/ProdPrev/ProdPrev';
import ProductContainer from './components/ProductContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbr />
        <Jumbo />
        <ProdPrev />
        {/* <ProductContainer/> */}
        <Foot/>
      </div>
    );
  }
}

export default App;
