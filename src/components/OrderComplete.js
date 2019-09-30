import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderComplete extends Component {
  render() {
    return (
      <div>
        <h2>Order Complete</h2>
        <p>Hooray! Way to order those products.</p>

        <Link to="/">
          <button type="button">GO HOME</button>
        </Link>
      </div>
    );
  }
}

export default OrderComplete;
