import React,{useState} from 'react';
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

    const [ email, setEmail ] = useState();//State for email
    const [ password, setPasword ] = useState();//State for password

    const [emailerror, setemailError] = useState('');//Error state for Invalid Email
    const [passworderror, stepasswordError] = useState('');//Error state for Invalid Password

    const onClickSubmit = (e) => {//function for submit data to backend
        e.preventDefault();//block the getting refresh when button clicked
        fetch('http://localhost:4000/login',{//call the API
             method: 'POST',
             mode : 'cors', 
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:4000/login'
              },    
            body: JSON.stringify({
                email,
                password
            }),
    })
            .then(response => response.json())
            .then((data) => {
                if(data == "invalidemail"){//email error statement
                    setemailError('Invalid Email..try again!');//set email error message
                } if(data == "invalidpassword"){//password error statement
                    stepasswordError('Invalid Password..try again!');//set password error message
                } if(data == "valid"){
                    //navigate to home page code here
                }
            })
        .catch((error) => {
            //setemailError('Network Errornn');    
            console.log(error);
        });
 
    }

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
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter Email"
                                            onChange={(e) => {setEmail(e.target.value)}}     
                                        />
                                        <p style={{color : 'red'}}>
                                            <small>{emailerror}</small>
                                        </p>
                                    </Form.Group>
                              
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Enter Password"
                                            onChange={(e) => {setPasword(e.target.value)}} 
                                        />
                                        <p style={{color : 'red'}}>
                                            <small>{passworderror}</small>
                                        </p>
                                    </Form.Group>

                                <div class="textAlign">
                                    <Button 
                                        variant="danger" 
                                        type="submit"
                                        className="textAlign"
                                        onClick={onClickSubmit}
                                    >
                                     Submit  
                                    </Button>
                                </div>

                              </Form>

                                <div className="textAlign"> 
                                    <a href="/emailenter" className="textSpace">Forget Password?</a>
                                        <br></br>
                                    <a href="/signup" className="textSpace">Don't Have account?</a>
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