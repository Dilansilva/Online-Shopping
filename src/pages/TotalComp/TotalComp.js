import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

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
              variant="success"
              style={{ marginTop: "10px", marginLeft: "50px" }}
            >
              Clear THe Cart
            </Button>
          </Col>

          <Col xs={3} md={3}>
            <Button
              variant="success"
              style={{ marginTop: "10px", marginLeft: "50px" }}
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
