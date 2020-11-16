import React from "react";

// import { withRouter } from "react-router-dom";
import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {
  //convert objects to array
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) =>
      // eslint-disable-next-line max-len,react/no-array-index-key
      [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients!</p>;
  }
  // let transformedIngredients = Object.keys(props.ingredients)
  //   .map((igKey) => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />;
  //     });
  //   })
  //   .reduce((arr, el) => {
  //     return arr.concat(el);
  //   }, []);

  // if (transformedIngredients.length === 0) {
  //   transformedIngredients = <p>Please start adding ingredients</p>;
  // }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
