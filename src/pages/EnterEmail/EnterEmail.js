import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from '../HeaderComponent';
import LableForm from './LableForm';

const EnterEmail = () => {
    return(
        <div>
            <HeaderComponent/>
                <h2 style={{textAlign: 'center',marginTop: '40px'}}>
                    Please Enter The login Email Of The Account To Retrieve Your Password
                </h2>
                    <div style={{textAlign: 'center',marginTop: '40px'}}>
                        <LableForm
                            name="Email : "
                            type="text"
                            onClick={() => {console.log("Clicked")}}
                            placeholder="Enter Email Here"
                        />
                    </div>
        </div>
    );
}

export default EnterEmail;