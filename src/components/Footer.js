import React from "react";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import { FaMailBulk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
   
      <div
        style={{
          backgroundColor: "#EEEEEE",
          height: "160px",
          display: "flex",
          alignItems: "center",
        }}
        className="text-center"
      >
        <Container>
          <Row style={{}} className="text-center">
            <Col md={6} className="text-center">
              <p style={{ fontSize: "30px" }}>
                <FaMailBulk style={{ marginRight: "2%",fontFamily:"Playfair Display, serif" }} />
                Get Updates & More
              </p>
            </Col>
            <Col md={6} className="text-center">
              <Form>
                <input
                  type="text"
                  style={{ height: "50px", width: "60%", border: "none" }}
                  placeholder="Your email"
                />

                <Button
                  variant="dark"
                  style={{
                    borderRadius: "0",
                    height: "50px",
                    marginBottom: "4px",
                    fontSize: "small",
                    fontWeight: "500",
                  }}
                >
                  SUBSCRIBE
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="text-center"
        style={{ width: "100%", padding: "50px 0", color: "white",backgroundColor:"#1C1C1C" }}
      >
        <Container>
          <Row>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ color: "#BDBDBD",fontFamily:"Playfair Display, serif" }}>Corporate Office</h3>
                <hr style={{ borderTop: "2px solid #BDBDBD", width: "100%" }} />
              </div>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                GT Holidays Pvt LTD,
              </p>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                Novel Tech Park,
              </p>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                Opposite to 1 MG Mall,
              </p>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                MG Road, Bangalore – 560042
              </p>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                Karnataka, India.
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ color: "#BDBDBD",fontFamily:"Playfair Display, serif" }}>Head Office</h3>
                <hr
                  style={{ borderTop: "2px solid lightgray", width: "100%" }}
                />
              </div>

              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                GT Holidays Pvt LTD,
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                No.1, Gemini Parsn,
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                Kodambakkam High Road,
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                Nungambakkam, Chennai – 600006
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                Tamilnadu, India.
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ color: "#BDBDBD",fontFamily:"Playfair Display, serif" }}>Our branches</h3>
                <hr
                  style={{ borderTop: "2px solid lightgray", width: "100%" }}
                />
              </div>
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Mumbai' style={{textDecoration:"none",color:"inherit"}}>
                  
                 Mumbai
                 </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Hyderabad' style={{textDecoration:"none",color:"inherit"}}>
                  Hyderabad
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Bangalore' style={{textDecoration:"none",color:"inherit"}}>
                  Bangalore
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Chennai' style={{textDecoration:"none",color:"inherit"}}>
                  Chennai
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Coimbatore' style={{textDecoration:"none",color:"inherit"}}>
                  Coimbatore
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Erode' style={{textDecoration:"none",color:"inherit"}}>
                  Erode
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Madurai' style={{textDecoration:"none",color:"inherit"}}>
                  Madurai
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Trichy' style={{textDecoration:"none",color:"inherit"}}>
                  Trichy
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link to='/contact/Salem' style={{textDecoration:"none",color:"inherit"}}>
                  Salem
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ color: "#BDBDBD", fontSize: "15px" }}>Call Us</h3>
                <hr style={{ borderTop: "2px solid white", width: "100%" }} />
              </div>

              <p
                style={{ fontSize: "25px", color: "#BDBDBD" }}
                className="mb-0"
              >
                +91 9940882200
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ color: "#BDBDBD", fontSize: "15px" }}>Email Us</h3>
                <hr style={{ borderTop: "2px solid white", width: "100%" }} />
              </div>
              <p
                style={{ fontSize: "25px", color: "#BDBDBD" }}
                className="mb-0"
              >
                mail@gtholidays.in
              </p>
            </Col>

            <Col md={4}>
              <div style={{ display: "inline-block" }}>
                <h3 style={{ color: "#BDBDBD", fontSize: "15px" }}>
                  Follow Us
                </h3>
                <hr
                  style={{
                    borderTop: "2px solid white",
                    width: "100%",
                    color: "#BDBDBD",
                  }}
                />

                <p className="mt-4" style={{ color: "#BDBDBD" }}>
                  {" "}
                  <FaInstagram size={25} style={{ marginLeft: "10px" }} />
                  <FaFacebookF size={25} style={{ marginLeft: "10px" }} />
                  <FaLinkedinIn size={25} style={{ marginLeft: "10px" }} />
                  <FaYoutube size={25} style={{ marginLeft: "10px" }} />
                  <FaGoogle size={25} style={{ marginLeft: "10px" }} />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
        <Container  className="text-center">
          <Row style={{marginTop:"2%",marginBottom:"1%"}}>
            <Col sm={6} >
              <p style={{fontSize:"13px",fontWeight:"500"}}>Copyright © 2024 by GT Holidays Pvt Ltd. All Rights Reserved.</p>
            </Col>
            <Col sm={6}>
              <p style={{fontSize:"13px",fontWeight:"500"}}>Privacy Policy | Terms & Conditions | Cancellation & Refund Policy</p>
            </Col>
          </Row>
        </Container>
     
    </>
  );
};

export default Footer;
