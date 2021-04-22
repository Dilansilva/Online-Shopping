import React, { useState } from 'react';

import Product from './Product';//import product component
import picOne from '../../images/41vMYgD92xL.jpg';//import product image 

const ProductRow = (props) => {
    const [code,setCode] = useState();//state for rendering code
    
    const propsFun = () => {
        if(props.price2 !== undefined){
            setCode(
                <div className="col-sm-3">
                    <Product
                        image={picOne}
                        price={props.price2}
                        count={props.count2}
                        details={props.details2}
                        ratings={props.ratings2}
                    />
                </div>
            );
        } 
    }

    return (  
        <div>
       
            <div class="row">
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price={props.price1}
                  count={props.count1}
                  details={props.details1}
                  ratings={props.ratings1}
                />
              </div>
             
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price={props.price3}
                  count={props.count3}
                  details={props.details3}
                  ratings={props.ratngs3}
                />
              </div>
              <div className="col-sm-3">
                <Product
                  image={picOne}
                  price={props.price4}
                  count={props.count4}
                  details={props.details4}
                  ratings={props.ratings4}
                />
              </div>
            </div>

        </div>
    );
}
 
export default ProductRow;
