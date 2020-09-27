import React from "react";
import "../styles/Checkout.css";
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser1/rec/PC/prime/Prime_Teaser_PC.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
