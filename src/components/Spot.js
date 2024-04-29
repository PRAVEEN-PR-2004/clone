import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling
import './Spot.css'
const Spot = () => {
  return (
    <div>
      <Container className='mt-5'>
      <h4 className="heading">Popular Packages</h4>
        <Row className='mt-3 mb-2'>
          <Col lg={8} md={12} sm={12} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/kerala.jpg')} alt="GTHOLIDAYS" className="img-fluid pack_img" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>Indian Tour Packages</span>
                <br></br>
                <br></br>
                
           
                <span className='tbox'>98 TOURS</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/aus.jpg')} alt="GTHOLIDAYS" className="img-fluid pack_img" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>International</span>
                <br></br>
                <br></br>
                
           
                <span className='tbox'  >362 TOURS</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/pool.jpg')} alt="GTHOLIDAYS" className="img-fluid pack_img" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>Honeymoon Packages</span>
             
                <br></br>
                <br></br>
                <span className='tbox' >17 TOURS</span>
                
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/street.jpg')} alt="GTHOLIDAYS" className="img-fluid pack_img" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>Eroupe Tour Packages</span>
                <br></br>
                <br></br>
               
                
                <span className='tbox'>144 TOURS</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/play.jpg')} alt="GTHOLIDAYS" className="img-fluid pack_img" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'> Educational Tour Packages</span>
                <br></br>
                <br></br>
               
                
                <span className='tbox' >15 TOURS</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Spot;
