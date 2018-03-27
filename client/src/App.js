import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Jumbo from './components/Jumbotron';
import Foot from './components/Footer';
import ProductContainer from './components/ProductPanel/ProductContainer';
import CartContainer from './components/CartPanel/CartContainer';
import UserContainer from './components/UserPanel/UserContainer'
import StoreContainer from './StoreContainer'

const App = () => (


  <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={StoreContainer} />
      <Route exact path="/cart" component={StoreContainer} />
      <Route exact path="/user" component={UserContainer} />
      </Switch>
      <Foot />
    </div>
  </Router>
);


export default App;
