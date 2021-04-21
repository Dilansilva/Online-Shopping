import React from 'react';

import HeaderComponent from '../HeaderComponent';//navbar
import Product from '../product/Product';//product

import image from '../../images/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.webp';

import {Carousel} from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <HeaderComponent/>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <h1>nknkk</h1>
      <Product
        price="199.45"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        ratings={5}
      />
        </div>
    )
}

export default Menu;
