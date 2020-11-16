import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];
  for (let i in props.ingredients) {
    ingredients.push({
      name: i,
      amount: props.ingredients[i],
    });
  }

  return (
    <div className={classes.Order}>
      <strong>Ingredients: </strong>
      {ingredients.map((ingredient) => (
        <span
          key={ingredient.name + ingredient.amount}
          style={{
            textTransform: "capitalize",
            display: "inline-block",
            margin: "0 8px",
            border: "1px solid #ccc",
            padding: "8px",
          }}
        >
          {ingredient.name}: {ingredient.amount}
        </span>
      ))}
      <p>
        Price: <strong>USD: {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
