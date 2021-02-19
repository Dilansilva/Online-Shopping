import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from '../HeaderComponent';//Import Header Component
import LableForm from './LableForm';//Import Lable component
import ButtonForm from './ButtonForm';//Import Button component

import '../../css/Sign-Up/SignUp.css';//Import CSS

const EnterEmail = () => {
    const [email, setEmail] = useState('');//state for email
    const onClickSubmit = () => {
        //fetch code here
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
                            <div style={{marginTop: '30px'}}>
                                <ButtonForm
                                    name="Submit"
                                    onClick={() => {console.log("Hello World")}}    
                                />
                            </div>
                    </div>
        </div>
    );
}

export default EnterEmail;