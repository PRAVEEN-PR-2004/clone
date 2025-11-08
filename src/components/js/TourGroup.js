import React, { useState, useEffect } from 'react';
import { getPackages } from '../../utils/api';
import { Card, Row, Col, Container } from 'react-bootstrap';
import grouptourimg from "../../assets/grouptour.jpg"; 
import Address from './Address';
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import '../style/TourGroup.css'
import { Link } from 'react-router-dom';

const TourGroup = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPackages('PACKAGES');
        setPackages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching packages:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
     <div style={{ marginBottom: '4%' }}> 
      <img src={grouptourimg} alt="Holidays Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
    <Container>
      <h2 style={{marginBottom:"2%",fontFamily:"serif",fontWeight:"500"}}>Ultimate Group Tour Adventures</h2>
      <Row className="package-container">
        {loading ? (
          <Col>Loading packages...</Col>
        ) : (
          packages.map((pkg) => (
          <Col key={pkg._id} xs={12} sm={6} md={4} lg={3} className='mb-5'>
            <Card className="mb-3 h-100">
            <Link to={`/showgrouptour/${pkg._id}`} children={pkg}>

            <div className="image-container">
          <Card.Img variant="top" src={pkg.Pimage} className="package-image" />
        </div>
        </Link>
             
              <Card.Body>
                <Card.Text style={{fontSize:"10px",color:" #888"}}><FaLocationDot /> {pkg.location}</Card.Text>
                <Card.Title style={{fontSize:"18px",marginBottom:"4%"}}>{pkg.name}</Card.Title>
                <Card.Text style={{fontSize:"14px",color:"orange"}}>
                  
                <CiClock2 /> {pkg.day}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
        )}
      </Row>
    </Container>
    <Address/>

    </>
  );
};

export default TourGroup;
