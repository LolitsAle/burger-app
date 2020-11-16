import React, { Component } from "react";

import classes from "./Modal.module.css";

import Aux from "../../../hoc/Auxilary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  componentDidUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        ></Backdrop>
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default React.memo(Modal);
