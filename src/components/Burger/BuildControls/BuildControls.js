import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

import { connect } from "react-redux";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        added={() => props.ingredientAdd(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      onClick={props.ordering}
      disabled={!props.purchaseable}
      className={classes.OrderButton}
    >
      ORDER NOW!!!
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    ingredientAdd: (value) =>
      dispatch({ type: "ADD_INGREDIENT", ingredientName: value }),
    ingredientRemove: (value) =>
      dispatch({ type: "REMOVE_INGREDIENT", ingredientName: value }),
  };
};

export default connect(null, mapDispatchToProps)(buildControls);
