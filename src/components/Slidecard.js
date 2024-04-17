import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const SlideCarousel = () => {
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", background: "blue", padding: "10px", borderRadius: "50%", position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-right"></i>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", background: "black", padding: "10px", borderRadius: "50%", position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-left"></i>
      </div>
    );
  };

  const settings = {
    dots: false, // Remove dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />, // Custom next arrow component
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false // Remove dots navigation
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false // Remove dots navigation
        }
      }
    ]
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>React Slick Carousel Example</h2>
          <Card>
            <Card.Body>
              <Slider {...settings}>
                <div>
                  <h3>Slide 1</h3>
                </div>
                <div>
                  <h3>Slide 2</h3>
                </div>
                <div>
                  <h3>Slide 3</h3>
                </div>
                <div>
                  <h3>Slide 4</h3>
                </div>
                <div>
                  <h3>Slide 5</h3>
                </div>
                <div>
                  <h3>Slide 6</h3>
                </div>
              </Slider>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCarousel;
