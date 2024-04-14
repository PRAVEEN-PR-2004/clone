import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={require('../assets/lion.jpg')}
            alt=''
          />
          <Carousel.Caption>
            <h3>BIRYANI</h3>
            <p className='d-none d-sm-block'>
            The real voyage of dicovery consists not in seeking new landscapes, but in having new eyes. Discover it with GT Holidays ,the No.1 brand in south india 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={require('../assets/lion.jpg')}
            alt=''
          />
          <Carousel.Caption>
            <h3>sauce</h3>
            <p className='d-none d-sm-block'>
            The real voyage of dicovery consists not in seeking new landscapes, but in having new eyes. Discover it with GT Holidays ,the No.1 brand in south india 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={require('../assets/lion.jpg')}
            alt=''
          />
          <Carousel.Caption>
            <h3>DESSERTS</h3>
            <p className='d-none d-sm-block'>
            The real voyage of dicovery consists not in seeking new landscapes, but in having new eyes. Discover it with GT Holidays ,the No.1 brand in south india 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner;
