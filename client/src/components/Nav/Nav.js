import React from "react";
import { Glyphicon } from 'react-bootstrap'
import './Nav.css'


const Navbr = props => (
<div id="nav">
<div className="navBrand" onClick={props.toggleHome}>codi's closet</div>

<div onClick={props.toggleCart} className=" navRight"><Glyphicon glyph="shopping-cart" /></div>
   {!props.loggedIn ? 
<div className="navRight" onClick={props.toggleLogin}> LOG IN/SIGN UP</div> :
<div className="navRight"> Welcome {props.username}! </div>}
</div>

);

export default Navbr;
