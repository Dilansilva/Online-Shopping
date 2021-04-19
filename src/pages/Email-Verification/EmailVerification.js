import React from 'react';
import {Navbar,
        Col,
        Form,
        Button} from 'react-bootstrap';//Nav item

import Lable from '../Sign-Up/Lable';//Import Lable Component
import Input from '../Sign-Up/Input';//Import Input Component 

import '../../css/Sign-Up/SignUp.css';
import '../../css/EmailVerification/EmailVerification.css';

const EmailVerification = () => {
    return(
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand><h2>Unicorn Shopping</h2></Navbar.Brand>
            </Navbar>
                <div>
                    <h3 style={{textAlign: 'center',marginTop: '40px'}}>Please Check Your Email And Enter Your OTP Code Here</h3>
                        <Form style={{textAlign: 'center',marginTop: '40px'}}>
                            <div tyle={{textAlign: 'center',marginTop: '40px'}}>
                            <Form.Row>
                            <Col className="alignItems">
                                <Lable 
                                    Lable="OTP Code :  "
                                />
                                    <Input
                                        placeholder="Email Will Be Used As Login ID"
                                        type="text"
                                    />
                            </Col>
                        </Form.Row>
                            </div>
                            <br/>
                                <Form.Row>
                                    <Col>   
                                        <Button
                                            variant="danger"
                                            type="submit"
                                            style={{backgroundColor:"#FF7616"}}
                                            className="roundInput" 
                                        >
                                        Submit
                                        </Button>
                                    </Col>
                                </Form.Row>
                        </Form>
                </div>
        </div>
    );
}

export default EmailVerification;