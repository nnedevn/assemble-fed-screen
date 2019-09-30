import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import cartData from "./data/data";

//Components
import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderComplete from "./components/OrderComplete";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: cartData
    };
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          {/* <Route exact path="/" component={} /> */}
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/cart"
            render={props => <Cart {...props} cart={this.state.cart} />}
          />
          <Route exact path="/order-complete" component={OrderComplete} />
        </Router>
      </div>
    );
  }
}

export default App;
