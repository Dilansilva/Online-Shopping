import React, { useState } from "react";

import HeaderComponent from "../HeaderComponent"; //import navigation bar
import BasketItem from "../BasketItem/BasketItem"; //import basketitem

const Cart = () => {
  return (
    <div>
      <HeaderComponent />
      <BasketItem
        price="200.10"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
      />

      <BasketItem
        price="200.10"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
      />

      <BasketItem
        price="200.10"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
      />

      <BasketItem
        price="200.10"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
      />
    </div>
  );
};

export default Cart;
