import React from 'react';
import {Jumbotron,
        Col,
        Row,
        Container,
        Image,
        Card,
        Form,
        Button} from 'react-bootstrap';

import '../../css/HomePage/LoginComponent.css';
import image from './homepage.png';

const LoginComponent = () => {
    return (
        <Jumbotron className="backgroundColor" fluid>
            <Container>
                <Row>
                    
                <Col sm={4}>
                        <h3>2021 Spring apparel</h3>
                            <h5>Popular, quality and</h5>
                        <h5>economical products</h5>
                    </Col>

                    <Col sm={4}>
                        <Image
                            src={image}
                            className="imageBackGround"
                            thumbnail
                        />
                    </Col>

                    <Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Account</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Address" />
                                    </Form.Group>
                              
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                <div class="textAlign">
                                    <Button 
                                        variant="danger" 
                                        type="submit"
                                        className="textAlign"
                                    >
                                     Submit     
                                    </Button>
                                </div>

                              </Form>

                                <div className="textAlign"> 
                                    <a href="#" className="textSpace">Forget Password?</a>
                                        <br></br>
                                    <a href="#" className="textSpace">Don't Have account?</a>
                                </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default LoginComponent;