import React from "react";

import HeaderComponent from "../HeaderComponent"; //navigation bar
// import { Badge } from ".";

const ProductDetails = () => {
  return (
    <div>
      <HeaderComponent />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{width:'33%'}}>
          <h1>Hello World</h1>
        </div>
        <div style={{width:'33%'}}>
          <h1>Hello World</h1>
        </div>
        <div style={{width:'33%'}}>
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
