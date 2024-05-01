import React from 'react';
import { PACKAGES } from './Gtpackages';
import { Card, Row, Col, Container } from 'react-bootstrap';
import grouptourimg from "../assets/grouptour.jpg"; 
import Address from './Address';
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import './TourGroup.css'
import { Link } from 'react-router-dom';
const TourGroup = () => {
  return (
    <>
     <div style={{ marginBottom: '4%' }}> 
      <img src={grouptourimg} alt="Holidays Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
    <Container>
      <h2 style={{marginBottom:"2%",fontFamily:"serif",fontWeight:"500"}}>Ultimate Group Tour Adventures</h2>
      <Row className="package-container">
        {PACKAGES.map((packages) => (
          <Col key={packages.id} xs={12} sm={6} md={4} lg={3} className='mb-5'>
            <Card className="mb-3 h-100">
            <Link to={`/showgrouptour/${packages.id}`} children={packages}>

            <div className="image-container">
          <Card.Img variant="top" src={packages.Pimage} className="package-image" />
        </div>
        </Link>
             
              <Card.Body>
                <Card.Text style={{fontSize:"10px",color:" #888"}}><FaLocationDot /> {packages.location}</Card.Text>
                <Card.Title style={{fontSize:"18px",marginBottom:"4%"}}>{packages.name}</Card.Title>
                <Card.Text style={{fontSize:"14px",color:"orange"}}>
                  
                <CiClock2 /> {packages.day}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Address/>

    </>
  );
};

export default TourGroup;
