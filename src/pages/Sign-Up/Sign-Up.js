import React,{useState,useEffect} from 'react';


import HeaderComponent from '../HeaderComponent';
import Lable from '../Sign-Up/Lable';//Import Lable Component in Sign-up
import Input from '../Sign-Up/Input';//Import User Input

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import '../../css/Sign-Up/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col,
    Form,
    Button
    } from 'react-bootstrap';

const SignUp = () => {

    const [Trademode,setTrademode] = useState('buyer');
    const [TrademodeCode,setTrademodeCode] = useState(null);
    const [email,setEmail ] = useState();//state for email
    const [password,setPassword] = useState('');//state for password
    const [fname,setFname] = useState('')//state for first name
    const [sname,setSname] = useState('');//state for second name
    const [pnumber,setPnumber] = useState('');//state for phone number
    const [company,setCompany] = useState('');//state for company name

    const [mailError,setMailerror] = useState('');//state for mail error
    const [passError,setpassError] = useState('');//state for password error
    const [buttonState,setButonstate] = useState('true');//state for button disable

    const [Toggle,setToggle] = useState('password');

    function ToggleButton(event){//function for toggle button
        event.preventDefault();
        if(Toggle === 'password'){
            setToggle('text');
        }else{
            setToggle('password');
        }
    }

    const handleState = () => {
        //setEmail(e.target.value);
        console.log('CLicked');
    }

    const validation = () => {//function for validation
        //e.preventDefault();//denied the refreshing
        console.log('Trade Mode',Trademode);

        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;//regex for email
        const passwordReg = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;//regex for password
        const telephoneReg = /^(?:7|0|(?:\+94))[0-9]{9,10}$/;//regex for telephone

        if(Trademode === 'buyer'){
            if(emailReg.test(email) === true){
                if(passwordReg.test(password) === true){
                    if(fname && sname){
                        if(telephoneReg.test(pnumber) === true){
                            setButonstate('');
                        }
                        else {
                            setButonstate('true');
                        }
                    }else{  
                        setButonstate('true');
                        
                    }
                } else{
                    setpassError('Password is too short!');
                }
            } else{
                setButonstate('true');
                setMailerror('Invalid Email!');
            }
        } else /*if(Trademode === 'seller')*/{
            if(emailReg.test(email) === true){
                console.log('EMail okay');
                if(passwordReg.test(password) === true){
                    console.log('password okay');
                    if(fname && sname){
                        console.log('names okay');
                        if(telephoneReg.test(pnumber) === true){
                            console.log('number');
                            if(company){
                                setButonstate('');
                                console.log('company okay');
                            }else{
                                setButonstate('true');
                            }
                        }
                        else {
                            setButonstate('true');
                        }
                    }else{ 
                        setButonstate('true');
                    }
                }
            } else{
                setButonstate('true');
            }
        }
    }

    useEffect(() => {//fuction for trade mode selection
       
        validation();
    })

    const tradeModeFun = () => {
        console.log('function executed!');
        // setTrademode('seller');//select the seller mode 
        console.log(Trademode);
        
           if(Trademode === 'seller'){
               setTrademode('buyer');
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
                                 onChange={(e) => {setCompany(e.value.target)}}
                            />
                        </Col>
                    </Form.Row>
                    <br/>
                </div>
                        );
                        
           }else{
                setTrademodeCode(null);
                setTrademode('seller');
           }
        
    }
  
    return(
        <div>
            <HeaderComponent/>
                <div style={{display: 'flex',  
                            justifyContent:'center', 
                            alignItems:'center', 
                            height: '100vh',
                            backgroundColor: '#f8f1f1'}}>
               
                <Form>
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
                                            onClick={tradeModeFun} 
                                            
                                        />
                                            <Form.Check
                                                type="radio"
                                                label="Seller"
                                                value="seller"
                                                name="trademode"
                                                onClick={tradeModeFun}
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
                                                onChange={(e) => {setEmail(e.target.value)}}
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
                                            type={Toggle}
                                            onChange={(e) => {setPassword(e.target.value)}}
                                        />
                                            <button 
                                                class="button button5"
                                                onClick={ToggleButton}
                                            ><i><FontAwesomeIcon icon={faEye} /></i></button>
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
                                            onChange={(e) => {setFname(e.target.value)}}
                                        />
                                            <Input
                                                placeholder="Second Name Here"
                                                type="text"
                                                onChange={(e) => {setSname(e.target.value)}}
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
                                            onChange={(e) => {setPnumber(e.target.value)}}
                                        />
                                </Col>
                            </Form.Row><br/>
    
                            <Form.Row>
                                <Col className="alignItems">
                                    <Button 
                                        variant="danger" 
                                        onClick={validation}
                                        type="submit"
                                        className="roundInput"
                                        style={{backgroundColor:"#FF7616"}}
                                        disabled={buttonState}
                                    >
                                        Register
                                    </Button>
                                </Col>
                            </Form.Row>
                </Form>
           
                </div>
        </div>
    );
}

export default SignUp;