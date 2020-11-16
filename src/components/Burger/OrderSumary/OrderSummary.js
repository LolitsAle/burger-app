import React, { Component } from "react";

import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //this could be a functional component, doest have to be class component
  componentDidUpdate() {
    // console.log("[OrderSumary] Updated");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
          {this.props.ingredients[key]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>YOUR ORDER</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price:</strong> {this.props.price.toFixed(2)}
        </p>
        <p>Continue to Checkout ?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
