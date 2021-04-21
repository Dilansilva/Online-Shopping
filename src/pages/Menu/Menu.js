import React from 'react';

import HeaderComponent from '../HeaderComponent';//navbar
import Product from '../product/Product';//product

import image from '../../images/shopping-online-on-mobile-application-600w-1697895496.webp';
import picOne from '../../images/41vMYgD92xL.jpg'


const Menu = () => {
    return (
        <div>
            <HeaderComponent/>

      <img src={image} className="img-fluid" alt="Responsive image" style={{width: '100%',height:'700px'}}></img>
      <br/>
      <br/>
          <div className="container-fluid">
            <div class="row">
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
            </div>
          </div>

          <br/>
          <div className="container-fluid">
            <div class="row">
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={5}
                />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Menu;

