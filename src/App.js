import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";

//containers
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    show: true,
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }
  // ..
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            {this.state.show ? (
              <Route path="/" exact component={BurgerBuilder} />
            ) : null}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
