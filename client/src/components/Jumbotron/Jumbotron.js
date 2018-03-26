import React from "react";
import { Jumbotron, Button, Image } from 'react-bootstrap'
import jumboimg from './jumboimg.jpg'
import "./jumbotron.css";

const Jumbo = props =>
<div >
<Jumbotron className="jumboBkrnd" >
  {/* <h1>Jumbo</h1>  */}
  <Button className="shopBtn">Shop Now</Button>
  </Jumbotron>
  </div>;

export default Jumbo;
