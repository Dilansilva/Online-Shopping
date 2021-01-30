import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from '../HeaderComponent';
import '../../css/Sign-Up/SignUp.css';

import {Container,
    Row,
    Col,
    Form,
    Jumbotron
    } from 'react-bootstrap';

const SignUp = () => {
    return(
        <div>
            <HeaderComponent/>
        <Jumbotron> 
            <Form>
                    <Form.Row>
                        <Col className="alignItems">
                            <span className="dot"></span>
                                <Form.Label style={{marginRight: "10px",marginLeft: "5px"}}>
                                    Email :
                                </Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="Buyer"
                                        name="buyer"
                                        id="buyer1"
                                    />
                                        <Form.Check
                                            type="radio"
                                            label="Seller"
                                            name="buyer"
                                            id="buyer2"
                                        />
                        </Col>
                    </Form.Row><br/>
                        <Form.Row>
                            <Col className="alignItems">
                                <span className="dot">
                                </span>   
                                    <Form.Label style={{marginRight: "10px",marginLeft: "5px"}}>
                                        Select Trade Role :
                                    </Form.Label>
                                        <Form.Control 
                                            placeholder="Email Will Be Used As Login ID"
                                            className="roundInput"
                                        />
                        </Col>
                </Form.Row><br/>


                    <Form.Row>
                        <Col className="alignItems">
                            <span className="dot"></span>
                                <Form.Label style={{marginRight: "10px",marginLeft: "5px"}}>
                                    Password :
                                </Form.Label>
                                    <Form.Control 
                                        placeholder="Please Set Login Password"
                                        className="roundInput"
                                        
                                    />
                        </Col>
                    </Form.Row><br/>


                        <Form.Row>
                            <Col className="alignItems">
                                <span className="dot"></span>
                                    <Form.Label style={{marginRight: "10px",marginLeft: "5px"}}>
                                        Company Name :
                                    </Form.Label>
                                        <Form.Control 
                                            placeholder="Company Name Here"
                                            className="roundInput"
                                        />
                            </Col>
                        </Form.Row><br/>

                        <Form.Row>
                            <Col className="alignItems">
                                <span className="dot"></span>
                                    <Form.Label style={{marginRight: "10px",marginLeft: "5px"}}>
                                        Full Name :
                                    </Form.Label>
                                        <Form.Control 
                                            placeholder="First Name Here"
                                            className="roundInput"
                                        />
                                        <Form.Control 
                                            placeholder="Second Name Here"
                                            className="roundInput"
                                        />
                            </Col>
                        </Form.Row>
            </Form>
        </Jumbotron>
        </div>
    );
}

export default SignUp;