import React from 'react';
import '../../css/Sign-Up/SignUp.css';//For css

const LableForm = (props) => {
    return(
        <form>
        <span className="dot"></span>
            <label>
                {props.name}
            </label>
                <input 
                    type={props.type}
                    onClick={props.OnClick}
                    placeholder={props.placeholder} 
                    className="roundInput"
                />
        </form>
    );
}

export default LableForm;