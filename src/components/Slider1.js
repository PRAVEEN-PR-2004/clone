import React from "react";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from '../assets/1s1.jpg'
import s2 from '../assets/1s2.jpg'
import s3 from '../assets/1s3.jpg'
import s4 from '../assets/1s4.jpg'
import s5 from '../assets/1s5.jpg'

const Slider1 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  return (
    <Container className="mt-4 mb-5">
      <h3 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>Stress-Free Holidays with GT</h3>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}  removeArrowOnDeviceType={["tablet", "mobile"]} >
        <div>
          <Card style={{margin:"5px",border:"none",boxShadow:"none"}}>
            <Card.Img src={s1} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px",border:"none",boxShadow:"none"}}>
            <Card.Img src={s2} alt="Image 2" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px",border:"none",boxShadow:"none"}}>
            <Card.Img src={s3} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px",border:"none",boxShadow:"none"}}>
            <Card.Img src={s4} alt="Image 2" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px",border:"none",boxShadow:"none"}}>
            <Card.Img src={s5} alt="Image 1" />
          </Card>
        </div>
      </Carousel>
    </Container>
  );
};

export default Slider1;
