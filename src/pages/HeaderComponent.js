import {
   Nav,
   h1,
   Navbar
} from 'react-bootstrap';
import React from 'react';
import '../css/HeaderComponent.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';//icon for shoppig cart

const HeaderComponent = () => {
  
    return(
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><h1>Unicorn Shopping</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/signup">Sign-up</Nav.Link>
          <Nav.Link href="/">Sign-in</Nav.Link>
            <Nav.Link href="/cart">
                <b>
                  <ShoppingCartIcon/>
                </b>
              <span 
                style={{//space between cart and item count
                  marginLeft:'10px',
                  marginRight:'10px'
                }}
              >0</span>
            </Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    );
}   

export default HeaderComponent;