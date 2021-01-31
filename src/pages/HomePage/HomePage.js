import React from 'react';

import '../../css/HomePage/HomePage.css'

import HeaderComponent from '../HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './LoginComponent';


const HomePage = () => {
    return(
        <div>
            <HeaderComponent/>
            <LoginComponent/>
        </div>
    );
}

export default HomePage;