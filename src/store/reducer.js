import * as actionTypes from "./actions";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 0.7,
  bacon: 0.8,
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
};

// const addIngredient = (state, action) => {
//   const oldCount = state.ingredients[action.ingredientName];
//   const updatedCount = oldCount + 1;
//   const updatedIngredients = {
//     ...state.ingredients,
//   };
//   updatedIngredients[action.ingredientName] = updatedCount;

//   //update price
//   let oldPrice = state.totalPrice;
//   const newPrice = oldPrice + INGREDIENT_PRICE[action.ingredientName];

//   return {
//     ingredients: updatedIngredients,
//     totalPrice: newPrice,
//   };
// };

// const removeIngredient = (state, action) => {
//   const oldCount = state.ingredients[action.ingredientName];
//   if (oldCount < 0) {
//     return;
//   }
//   const updatedCount = oldCount - 1;
//   const updatedIngredients = {
//     ...state.ingredients,
//   };
//   updatedIngredients[action.ingredientName] = updatedCount;

//   //update price
//   const oldPrice = state.totalPrice;
//   const newPrice = oldPrice - INGREDIENT_PRICE[action.ingredientName];

//   return {
//     ingredients: updatedIngredients,
//     totalPrice: newPrice,
//   };
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_INGREDIENT:
      return {
        ...initialState,
        ingredients: action.data,
      };

    case actionTypes.ADD_INGREDIENT:
      const current_price_add = state.totalPrice;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: current_price_add + INGREDIENT_PRICE[action.ingredientName],
      };

    case actionTypes.REMOVE_INGREDIENT:
      const current_price_remove = state.totalPrice;
      if (state.ingredients[action.ingredientName] === 0) return;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice:
          current_price_remove - INGREDIENT_PRICE[action.ingredientName],
      };

    default:
      break;
  }
  return state;
};

export default reducer;
