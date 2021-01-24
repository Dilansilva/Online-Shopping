import {
   Nav,
   h1
} from 'react-bootstrap';
import React from 'react';
import '../css/HeaderComponent.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
    return(
        <Nav
            activeKey="/home"
            className="navColor"
            expand="lg"
        >
        <Nav.Item>
          <Nav.Link href="/home">
            <h1 className="headerColor">Unicorn Shopping</h1>
          </Nav.Link>
        </Nav.Item>

      
      </Nav>
    );
}   

export default HeaderComponent;