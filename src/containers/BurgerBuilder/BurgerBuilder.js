import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../axios-orders";

import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSumary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Burgerbuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchasing: false,
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://compact-citizen-256308.firebaseio.com/ingredients.json")
      .then((response) => {
        this.props.updateIngredients(response.data);
        this.updatePurchaseState(this.props.igdt);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
        return;
      });
  }

  // componentDidUpdate() {
  //   if (this.props.igdt) {
  //     const purchaseable = this.updatePurchaseState(this.props.igdt);
  //     if (purchaseable === true) {
  //       this.setState({ purchaseable: true });
  //     }
  //     if (purchaseable === false && this.state.purchaseable === true) {
  //       this.setState({ purchaseable: false });
  //     }
  //   }
  // }

  orderToggleHandler = () => {
    const state = this.state.purchasing;
    this.setState({ purchasing: !state });
  };

  updatePurchaseState(updatedIngredients) {
    const ingredients = updatedIngredients;
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  modalClosedHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // queryParams.push("price=" + this.state.totalPrice);
    // const queryString = queryParams.join("&");
    // console.log(queryParams);
    this.props.history.push({
      pathname: "/checkout",
    });
  };

  render() {
    // console.log(this.props.igdt);

    const disabledInfo = {
      ...this.props.igdt,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSumary = null;

    let burger = this.state.error ? (
      <p>Ingredient cannot be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.igdt) {
      orderSumary = (
        <OrderSummary
          price={this.props.prc}
          ingredients={this.props.igdt}
          purchaseCancel={this.modalClosedHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
      burger = (
        <Aux>
          <Burger ingredients={this.props.igdt}></Burger>
          <BuildControls
            disabled={disabledInfo}
            price={this.props.prc}
            purchaseable={this.updatePurchaseState(this.props.igdt)}
            ordering={this.orderToggleHandler}
          />
        </Aux>
      );
    }

    if (this.state.loading) {
      orderSumary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.modalClosedHandler}
        >
          {orderSumary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    igdt: state.ingredients,
    prc: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIngredients: (ingredients) => {
      return dispatch({ type: "UPDATE_INGREDIENT", data: ingredients });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Burgerbuilder, axios));
