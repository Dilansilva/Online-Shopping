import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,
        Container,
        Row,
        Col,
        Image} from 'react-bootstrap';


const HomeBuyer = () => {
    return(
        <div>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Online Shopping</Navbar.Brand>
                </Navbar>
                   <div class="py-5">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <Image src={require("../../images/41vMYgD92xL.jpg")} rounded/>
                                </Col>
                                <Col sm>
                                    <Image src={require("../../images/817Woygy77L._AC_UL320_.jpg")} rounded/>
                                </Col>
                                <Col sm>
                                    <Image src={require("../../images/81jENTZX6UL._AC_UL320_.jpg")} rounded/>
                                </Col>
                                <Col sm>
                                    <Image src={require("../../images/81sacygDqDL._AC_UL320_.jpg")}rounded/>
                                </Col>
                            </Row>
                        </Container>
                   </div>
        </div>
    );
}

export default HomeBuyer;