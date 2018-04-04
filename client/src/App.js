import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductContainer from './components/ProductPanel/ProductContainer';
import CartContainer from './components/CartPanel/CartContainer';
// import LoginContainer from './LoginContainer'
import StoreContainer from './StoreContainer'
import Foot from './components/Footer'

const App = () => (
  <Router>
    <div style={{ fontFamily: 'Poppins' }} className="App">
      <Switch>
      <Route exact path="/" component={StoreContainer} />
      </Switch>
      <Foot toggleHome={() => this.handleHomeView()} toggleCart={() => this.handleCartView()} toggleLogin={() => this.handleLoginView()} />
    </div>
  </Router>
);


export default App;
