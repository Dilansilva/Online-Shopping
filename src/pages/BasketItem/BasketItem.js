import React, { useState, useEffect } from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import GradeIcon from "@material-ui/icons/Grade"; //star icon

import image from "../../images/41vMYgD92xL.jpg"; //import image

const BasketItem = (props) => {
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
      <br />
      <Container
        className="block-example border border-primary"
        style={{ margin: "10px" }}
      >
        <Row>
          <Col xs={3} md={2}>
            <Image src={image} fluid />
          </Col>
          <Col xs={6} md={6}>
            <p>
              <b>{props.details}</b>
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>${props.price}</b>
              <div>{star}</div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <p></p>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete from Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasketItem;
