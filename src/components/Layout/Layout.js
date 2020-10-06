import React from "react";
import Aux from "../../hoc/Auxilary";

import classes from "./Layout.module.css";

import ToolBar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Aux>
    <ToolBar></ToolBar>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
