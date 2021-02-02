import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';//Nav item

import ButtonForm from '../EnterEmail/ButtonForm';
import LableForm from '../EnterEmail/LableForm';

const ChangePassword = () => {
    return(
        <div>
            <Navbar expand="lg" variant="light" bg="light" expand="lg">
                <Navbar.Brand><h2>Unicorn Shopping</h2></Navbar.Brand>
            </Navbar>
                <div>
                    <h2 style={{textAlign: 'center',marginTop: '40px'}}>Please Enter Your New Password Here</h2>
                        <div style={{textAlign: 'center',marginTop: '50px'}}>
                            <LableForm
                                name="New Password :"
                                type="text"
                                onClick={() => {console.log("Hello World")}}
                                placeholder="Enter The New Passwor Here"
                            />
                                <div style={{marginTop: '30px'}}>
                                    <ButtonForm
                                        onClick={() => {console.log("Hello World")}}
                                        name="Submit"
                                    />
                                </div>
                        </div>
                </div>
        </div>
    );
}

export default ChangePassword;