import React, { useState } from "react";

import HeaderComponent from "../HeaderComponent"; //import navigation bar
import BasketItem from "../BasketItem/BasketItem"; //import basketitem
import TotalComp from "../TotalComp/TotalComp"; //import get Total component

const Cart = () => {
  return (
    <div>
      <HeaderComponent />
      <BasketItem
        price="300"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
        unitcount={4}
      />

      <BasketItem
        price="200.10"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
        unitcount={2}
      />

      <BasketItem
        price="453.76"
        details="Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
        unitcount={2}
      />

      <BasketItem
        price="674.32"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ratings={5}
        unitcount={2}
      />
      <TotalComp />
    </div>
  );
};

export default Cart;
