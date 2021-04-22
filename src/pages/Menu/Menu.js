import React from 'react';

import HeaderComponent from '../HeaderComponent';//navbar
import Product from '../product/Product';//product

import image from '../../images/backgorund2.webp';
import picOne from '../../images/41vMYgD92xL.jpg'

const sectionStyle = {
  minWidth: "100%",
  minHeight: "100%",
  //position: 'fixed',
  height: "700px",
  textAlign: "center",
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'

};

const Menu = () => {

  

    return (
        <div>
            <HeaderComponent/>

      {/* <img src={image} className="img-fluid" alt="Responsive image" style={{width: '100%',height:'700px'}}></img> */}

      <section style={sectionStyle}>
        
      </section>

      <br/>
      <br/>
      <div style={{textAlign:'center'}}><h1><u>Electronics</u></h1></div>
          <div className="container-fluid">
            <div class="row">
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={26}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
                  ratings={1}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={21}
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  ratings={3}
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
          <div style={{textAlign: 'center'}}><h1><u>Kitchen Items </u></h1></div>
          <div className="container-fluid">
            <div class="row">

              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price="199.45"
                  count={1000}
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

