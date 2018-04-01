import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductContainer from './components/ProductPanel/ProductContainer';
import CartContainer from './components/CartPanel/CartContainer';
import LoginContainer from './components/LoginPanel/LoginContainer'
import StoreContainer from './StoreContainer'

const App = () => (
  <Router>
    <div style={{ fontFamily: 'Poppins' }} className="App">
      <Switch>
      <Route exact path="/" component={StoreContainer} />
      <Route exact path="/cart" component={StoreContainer} />
      <Route exact path="/login" component={LoginContainer} />
      </Switch>
    </div>
  </Router>
);


export default App;
