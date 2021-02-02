import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';//Nav item

import '../../css/Sign-Up/SignUp.css';//Import CSS

const ButtonForm = (props) => {
    return(
            <Button 
                variant="danger"
                onClick={props.onClick}
                className="roundInput"
                style={{backgroundColor:"#FF7616"}}
            >
                {props.name}
            </Button>
    );
};

export default ButtonForm;