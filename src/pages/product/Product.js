import React, { useState, useEffect } from "react";

import { Card } from "react-bootstrap";
import GradeIcon from "@material-ui/icons/Grade"; //star icon
import Button from "@material-ui/core/Button"; //button

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Product = (props) => {
  const [star, setStar] = useState(
    <div>
      <GradeIcon />
      <GradeIcon />
    </div>
  );

  useEffect(() => {
    ratings();
  }, [props.ratings]);

  const ratings = () => {
    //function for ratings
    console.log(props.ratings);

    if (props.ratings === 1) {
      //when the rarings are 1
      setStar(
        <div>
          <GradeIcon />
        </div>
      );
    } else if (props.ratings === 2) {
      //when the ratings are 2
      setStar(
        <div>
          <GradeIcon />
          <GradeIcon />
        </div>
      );
    } else if (props.ratings === 3) {
      //when the rarings are 3
      setStar(
        <div>
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
        </div>
      );
    } else if (props.ratings === 4) {
      //when the ratings are 4
      setStar(
        <div>
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
        </div>
      );
    } else {
      //when the ratings are 5
      setStar(
        <div>
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
        </div>
      );
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>${props.price}</Card.Title>
          <Card.Text>
            <small>{props.details}</small>
          </Card.Text>
          <Card.Text>
            <div style={{ display: "flex" }}>
              {" "}
              {/*add a horizontal view between stars and count*/}
              {star}
              <b>({props.count})</b>
            </div>
          </Card.Text>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddShoppingCartIcon />}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
