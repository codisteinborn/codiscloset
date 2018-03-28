import React from "react";
import { Jumbotron, Image } from 'react-bootstrap';
import Button from 'muicss/lib/react/button';
import jumboimg from './jumboimg.jpg';
import "./jumbotron.css";

const Jumbo = props =>
<div >
<Jumbotron className="jumboBkrnd" >
  <Button variant="raised" className="shopBtn">Shop Now</Button>
  </Jumbotron>
  </div>;

export default Jumbo;
