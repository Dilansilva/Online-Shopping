import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "@material-ui/core/Button"; //button

import DeleteIcon from "@material-ui/icons/Delete"; //bin icon
import PaymentIcon from "@material-ui/icons/Payment"; //payment icon

const TotalComp = () => {
  const [Total, setTotal] = useState(0.0);
  return (
    <div>
      <br />
      <Container
        className="block-example border border-primary"
        style={{ alignItems: "center", borderRadius: "20px" }}
      >
        <Row>
          <Col xs={3} md={3}>
            <Button
              style={{ marginLeft: "10px", marginTop: "10px" }}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Clear The Cart
            </Button>
          </Col>

          <Col xs={3} md={3}>
            <Button
              style={{ marginLeft: "10px", marginTop: "10px" }}
              variant="contained"
              color="primary"
              startIcon={<PaymentIcon />}
            >
              Pay Here
            </Button>
          </Col>

          <Col xs={3} md={5}>
            <h1>Total Price : ${Total}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TotalComp;
