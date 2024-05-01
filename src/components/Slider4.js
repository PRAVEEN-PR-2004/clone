import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from '../assets/wed1.png'
import s2 from '../assets/wed2.png'
import s3 from '../assets/wed3.png'
import s4 from '../assets/4s1.png'
import s5 from '../assets/4s2.png'
import s6 from '../assets/4s3.png'



const Slider3 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  return (
   
      <diV>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} containerClass="carousel-container"   >
        <div >
          <Card style={{margin:"5px"}} className="h-100">
            <Card.Img  style={{height:"100%"}} src={s1} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}} className="h-100">
            <Card.Img  style={{height:"100%"}} src={s2} alt="Image 2" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}} className="h-100">
            <Card.Img  style={{height:"100%"}} src={s3} alt="Image 1" />
          </Card>
        </div>
       
        <div >
          <Card style={{margin:"5px"}} className="h-100">
            <Card.Img  style={{height:"100%"}} src={s4} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}} className="h-100">
            <Card.Img  style={{height:"100%"}} src={s5} alt="Image 2" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}} className="h-100">
            <Card.Img style={{height:"100%"}} src={s6} alt="Image 1" />
          </Card>
        </div>
       
        
      </Carousel>
      </diV>
   
  );
};

export default Slider3;
