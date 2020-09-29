import React from "react";

import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <burgerIngredient type="bread-top" />
      <burgerIngredient type="cheese" />
      <burgerIngredient type="salad" />
      <burgerIngredient type="meat" />
      <burgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
