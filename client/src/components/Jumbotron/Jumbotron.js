import React from "react";
import { Jumbotron, Button } from 'react-bootstrap'

const Jumbo = props =>
<div>
<Jumbotron style={{ height: 450, clear: 'both', backgroundColor: 'blue', color: 'white' }}>
  <h1>Jumbo</h1> 
  <Button style={{height: 75, width: 290, border: 6, borderStyle: 'solid', borderColor: 'white', backgroundColor: "blue", backgroundImage: 'none', color: 'white', fontSize: 30 }}>Shop Now</Button>
  </Jumbotron>
  </div>;

export default Jumbo;
