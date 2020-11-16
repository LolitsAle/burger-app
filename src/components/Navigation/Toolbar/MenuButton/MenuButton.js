import React from "react";

import classes from "./MenuButton.module.css";

const menuButton = (props) => (
  <div onClick={props.openDrawer} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default menuButton;
