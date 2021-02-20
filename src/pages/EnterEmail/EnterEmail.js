import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from '../HeaderComponent';//Import Header Component
import LableForm from './LableForm';//Import Lable component
import ButtonForm from './ButtonForm';//Import Button component

import '../../css/Sign-Up/SignUp.css';//Import CSS

const EnterEmail = () => {//function for on click event
    const [email, setEmail] = useState('');//state for email
    const [emailError, setEmailError] = useState('');//State for Email Error
    const [networkError, setNetworkerror] = useState('');//State for Network Error
     
    const onClickSubmit = (e) => {
        e.preventDefault();//block the getting refresh when button clicked
        fetch('http://localhost:4000/enterEmail',{//call the API
             method: 'POST',
             mode : 'cors', 
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:4000/enterEmail'
              },    
            body: JSON.stringify({
               email//send email to backend
            }),
        })
            .then(response => response.json())
            .then((data) => {
                if(data == "invalidemail"){//email error statement
                    setEmailError('Invalid Email..try again!');//set email error message
                }  if(data == "valid"){
                    //navigate to home page code here
                }
            })
        .catch((error) => {
            setNetworkerror('Network Error');//email error statement   
            console.log(error);//have to remove
        });
    }
    return(
        <div>
            <HeaderComponent/>
                <h2 style={{textAlign: 'center',marginTop: '40px'}}>
                    Please Enter The login Email Of The Account To Retrieve Your Password
                </h2>
                    <div style={{textAlign: 'center',marginTop: '50px'}}>
                        <LableForm
                            name="Email : "
                            type="text"
                            onChange={(e) => {setEmail(e.target.value)}}
                            placeholder="Enter Email Here"
                        />
                            <p style={{color : 'red'}}>{/*Error message for invalid Emai*/}
                                <small>{emailError}</small>
                            </p>

                                <p style={{color : 'red'}}>{/*Error message for Network error */}
                                    <small>{networkError}</small>
                                </p>

                            <div style={{marginTop: '30px'}}>
                                <ButtonForm
                                    name="Submit"
                                    onClick={onClickSubmit}    
                                />
                            </div>
                    </div>
        </div>
    );
}

export default EnterEmail;