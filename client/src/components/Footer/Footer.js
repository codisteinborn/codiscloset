import React from "react";
import './Footer.css'

const Foot = props =>(
<div id="footer">
  <div>codi's closet</div>
  <div onClick={props.toggleHome}>Shop Now</div>
  <div onClick={props.toggleLogin}>Log in/ Sign up</div>
  <div onClick={props.toggleCart}>View Cart</div>
</div>
);

export default Foot;
