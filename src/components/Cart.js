import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Item from "./Item";

//TODO: Style

class Cart extends Component {
  getSubtotal(arr) {
    let sum = 0;
    for (let item of arr) {
      sum += item.unitPrice * item.quantity;
    }
    return sum;
  }

  render() {
    const renderedItems = this.props.cart.map(item => (
      <Item item={item} key={item.sku} />
    ));
    const subTotal = this.getSubtotal(this.props.cart);
    return (
      <div className="cart">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <p>QUANTITY</p>
          <p>PRICE</p>
        </div>
        {renderedItems}

        <div className="subtotal">
          <p>Subtotal</p>
          <p>{subTotal}</p>
        </div>
        <Link to="/checkout">
          <button type="button">PLACE ORDER</button>
        </Link>
      </div>
    );
  }
}

export default Cart;
