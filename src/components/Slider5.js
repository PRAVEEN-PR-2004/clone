import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from '../assets/wed4.png'
import s2 from '../assets/wed5.png'
import s3 from '../assets/wed6.png'
import s4 from '../assets/5s1.png'




const Slider5 = () => {
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
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} containerClass="carousel-container" >
        <div >
          <Card style={{margin:"5px"}}>
            <Card.Img src={s1} alt="Image 1" className="h-100" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s2} alt="Image 2" className="h-100" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s3} alt="Image 1"  className="h-100"/>
          </Card>
        </div>
       
        <div >
          <Card style={{margin:"5px"}}>
            <Card.Img src={s4} alt="Image 1" className="h-100" />
          </Card>
        </div>
        
        
      </Carousel>
      </diV>
   
  );
};

export default Slider5;
