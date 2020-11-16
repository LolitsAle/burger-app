import React, { Component } from "react";

import Order from "../../components/Order/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  //fetch order from firebase and pass it here
  componentDidMount() {
    axios
      .get("orders.json")
      .then((response) => {
        const fetchOrders = [];
        for (let key in response.data) {
          fetchOrders.push({ ...response.data[key], id: key });
        }
        // console.log(fetchOrders);
        // console.log(response.data);
        this.setState({ loading: false, orders: fetchOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log("fail fetching");
      });
  }

  render() {
    let orders = <Spinner />;

    if (this.state.loading === false) {
      orders = (
        <React.Fragment>
          {this.state.orders.map((order) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
            />
          ))}
        </React.Fragment>
      );
    }
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
