import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TotalComp = () => {
  const [Total, setTotal] = useState(2000);
  return (
    <div>
      <Container
        className="block-example border border-primary"
        style={{ alignItems: "center", borderRadius: "20px" }}
      >
        <Row>
          <Col xs={3} md={7}>
            <h1></h1>
          </Col>

          <Col xs={3} md={5}>
            <h1>Totale Price : ${Total}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TotalComp;
