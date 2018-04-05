import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoreContainer from './StoreContainer';

const App = () => (
  <Router>
    <div style={{ fontFamily: 'Poppins' }} className="App">
      <Switch>
      <Route exact path="/" component={StoreContainer} />
      </Switch>
    </div>
  </Router>
);


export default App;
