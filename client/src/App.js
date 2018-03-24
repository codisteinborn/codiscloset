import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbr from './components/Nav';
import Jumbo from './components/Jumbotron';
import Foot from './components/Footer';
import ProductContainer from './components/ProductPanel/ProductContainer';
import CartContainer from './components/CartPanel/CartContainer';
import UserContainer from './components/UserPanel/UserContainer'

const App = () => (
  <Router>
    <div className="App">
      <Navbr />
      <Switch>
      <Route exact path="/" component={ProductContainer} />
      <Route exact path="/cart" component={CartContainer} />
      <Route exact path="/user" component={UserContainer} />
      </Switch>
      <Foot />
    </div>
  </Router>
);


export default App;
