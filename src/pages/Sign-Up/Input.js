import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form} from 'react-bootstrap';

import '../../css/Sign-Up/Input.css';//import css

const Input = (props) => {//For Input Component
    return(
        <div>
            <Form.Control 
                placeholder={props.placeholder} //prop for placholder
                type={props.type} //prop for type
                className="forInput"
            />
        </div>
    );
}

export default Input;