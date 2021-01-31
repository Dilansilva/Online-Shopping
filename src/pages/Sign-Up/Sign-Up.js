import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from '../HeaderComponent';
import Lable from '../Sign-Up/Lable';//Import Lable Component in Sign-up
import Input from '../Sign-Up/Input';//Import User Input

import '../../css/Sign-Up/SignUp.css';

import {Col,
    Form,
    Jumbotron,
    Button
    } from 'react-bootstrap';

const SignUp = () => {

    const [Trademode,setTrademode] = useState();
    const [TrademodeCode,setTrademodeCode] = useState(null);

    useEffect(() => {
        if(Trademode == 'seller'){
            setTrademodeCode(
                <div>
                                <Form.Row>
                                    <Col className="alignItems">
                                        <Lable
                                            Lable="Company Name : "
                                        />
                                        <Input
                                             placeholder="Company Name Here"
                                            type="text"
                                        />
                                    </Col>
                                </Form.Row>
                                <br/>
                            </div>
            );
        } else if(Trademode == 'buyer'){
            setTrademodeCode(null);
        }
    })

  
    return(
        <div>
            <HeaderComponent/>
                <div >
                <Jumbotron> 
                <Form style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Form.Row>
                            <Col className="alignItems">
                                <span className="dot"></span>
                                    <Form.Label style={{marginRight: "10px",marginLeft: "5px"}}>
                                    Select Trade Role :
                                    </Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Buyer"
                                            value="buyer"
                                            name="trademode"
                                            onChange={(e) => { setTrademode(e.target.value) }} 
                                        />
                                            <Form.Check
                                                type="radio"
                                                label="Seller"
                                                value="seller"
                                                name="trademode"
                                                onChange={(e) => { setTrademode(e.target.value) }}
                                            />
                            </Col>
                        </Form.Row><br/>
                            <Form.Row>
                                <Col className="alignItems">
                                    <Lable
                                        Lable="Email : "
                                    />
                                            <Input
                                                placeholder="Email Will Be Used As Login ID"
                                                type="text"
                                            />
                            </Col>
                    </Form.Row><br/>
    
                        <Form.Row>
                            <Col className="alignItems">
                                <Lable
                                    Lable="Password : "
                                />
                                        <Input
                                            placeholder="Please Set Login Password"
                                            type="password"
                                        />
                            </Col>
                        </Form.Row><br/>
    
                           <div>
                                {TrademodeCode}
                           </div>
    
                            <Form.Row>
                                <Col className="alignItems">
                                    <Lable
                                        Lable="Full Name : "
                                    />
                                        <Input
                                            placeholder="First Name Here"
                                            type="text"
                                        />
                                            <Input
                                                placeholder="Second Name Here"
                                                type="text"
                                            />
                                </Col>
                               </Form.Row><br/>
    
                            <Form.Row>
                                <Col className="alignItems">
                                    <Lable
                                        Lable="Tel  :  "
                                    />
                                        <Input
                                            placeholder="Phone Number"
                                            type="text"
                                        />
                                </Col>
                            </Form.Row><br/>
    
                            <Form.Row>
                                <Col className="alignItems">
                                    <Button 
                                        variant="danger" 
                                        type="submit"
                                        className="roundInput"
                                        style={{backgroundColor:"#FF7616"}}
                                    >
                                        Register
                                    </Button>
                                </Col>
                            </Form.Row>
                </Form>
            </Jumbotron>
                </div>
        </div>
    );
}

export default SignUp;