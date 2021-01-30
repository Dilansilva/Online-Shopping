import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/Sign-Up/SignUp.css';//For css

import {Form, Jumbotron} from 'react-bootstrap';


const Lable = (props) => {
    return(
        <div>
           <Jumbotron>
                <span className="dot"></span>
                    <Form.Label>{props.Lable}</Form.Label>
           </Jumbotron>
        </div>
    );
}

export default Lable;