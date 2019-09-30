import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

//TODO: Add validation

class Checkout extends Component {
  constructor(){
    super();
    this.state = {
      formData: {},
    }
  }

  handleChange(e){
    // handleChange will be called on every input
    // It will read the input's unique identifies (id or data- attribute)
    // and use that to set a property with the same name on the state object
    // This way we'll have only one function which will handle the change on all the form-fields.
    this.setState({
      
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: send the state object containing all the relevant data to the appropriate API
  }

  render() {
    return (
      <div className="checkout">
        <h2>Check Out</h2>
        <form className="form-payment" action="" onSubmit={this.handleSubmit}>
          <fieldset className="payment-info">
            <legend>Payment Information</legend>
            <label>
              Name on Card
              <input type="text" placeholder="Name on Card" />
            </label>
            <label>
              Card Number
              <input type="number" placeholder="XXXX XXXX XXXX XXXX" />
            </label>

            {/* TODO: Properly format the field*/}
            <label>
              Expiration Date
              <input type="" placeholder="MM" />
            </label>

            <label>
              CVV
              <input type="number" placeholder="CVV" />
            </label>
          </fieldset>

          <fieldset className="shipping-address">
            <legend>Shipping Address</legend>

            <label>
              Name
              <input type="text" placeholder="Full name" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Address" />
            </label>
            <label>
              Apt/suite/etc
              <input type="text" placeholder="Apt/suite/etc" />
            </label>
            <label>
              City
              <input type="text" placeholder="City" />
            </label>
            {/* TODO: Add the option for all relevant countries*/}
            <label>
              Country
              <input type="text" placeholder="Country" />
            </label>
            {/* TODO: Add the option for all relevant states*/}
            <label>
              State
              <input type="text" placeholder="State" />
            </label>
            {/* TODO: Add a check for valid ZIP code*/}
            <label>
              ZIP Code
              <input type="number" placeholder="ZIP Code" />
            </label>

            <label>
              <input type="checkbox" />
              Billing address same as shipping
            </label>
          </fieldset>
        </form>

        <Link to="/order-complete">
          <button type="button">CHECK OUT</button>
        </Link>
      </div>
    );
  }
}

export default Checkout;
