import React from 'react';
import {Navbar,
        Col,
        Form} from 'react-bootstrap';//Nav item

import Lable from '../Sign-Up/Lable';//Import Lable Component
import Input from '../Sign-Up/Input';//Import Input Component 

import '../../css/Sign-Up/SignUp.css';
import '../../css/EmailVerification/EmailVerification.css';

const EmailVerification = () => {
    return(
        <div>
            <Navbar expand="lg" variant="light" bg="light" expand="lg">
                <Navbar.Brand><h2>Unicorn Shopping</h2></Navbar.Brand>
            </Navbar>
                <div className="spaceBetweenNavBar">
                    <h3>Please Check Your Email And Enter Your OTP Code Here</h3>
                        <Form>
                            <Form.Row>
                                <Col className="alignItems">
                                    <Lable 
                                        Lable="OTP Code : "
                                    />
                                        <Input
                                            placeholder="Email Will Be Used As Login ID"
                                            type="text"
                                        />
                                </Col>
                            </Form.Row>
                        </Form>
                </div>
        </div>
    );
}

export default EmailVerification;