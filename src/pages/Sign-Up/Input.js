import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form} from 'react-bootstrap';

import '../../css/Sign-Up/Input.css';//import css
import '../../css/Sign-Up/SignUp.css';//import css from sign-up

const Input = (props) => {//For Input Component
    return(
        <div>
            <Form.Control 
                placeholder={props.placeholder} //prop for placholder
                type={props.type} //prop for type
                className="roundInput"
            />
        </div>
    );
}

export default Input;