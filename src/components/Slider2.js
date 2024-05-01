import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from '../assets/2s1.jpg'
import s2 from '../assets/2s2.jpg'
import s3 from '../assets/2s3.jpg'
import s4 from '../assets/2s4.jpg'
import s5 from '../assets/2s5.jpg'
import s6 from '../assets/2s6.jpg'
import s7 from '../assets/2s7.jpg'
import { Link } from "react-router-dom";

const Slider2 = () => {
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
    <Container style={{marginTop:"4%"}} >
      <h3 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>GT Premium Group Tours</h3>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}  removeArrowOnDeviceType={["tablet", "mobile"]}>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s1} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s2} alt="Image 2" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s3} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s4} alt="Image 2" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s5} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s6} alt="Image 1" />
          </Card>
        </div>
        <div>
          <Card style={{margin:"5px"}}>
            <Card.Img src={s7} alt="Image 1" />
          </Card>
        </div>
      </Carousel>
      <Link to='/packages'>
      <div className="text-center mt-3">
        <Button
          style={{
            backgroundColor: "#ffcc00",
            border: "none",
            borderRadius: "0px",
            paddingLeft: "15px",
            paddingRight: "15px",
            color: "black",
            fontSize: "17px",
            fontWeight: "700"
          }}
        >
          Know More
        </Button>
      </div>
    </Link>
    </Container>
  );
};

export default Slider2;
