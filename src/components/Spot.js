import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling
import './Spot.css'
const Spot = () => {
  return (
    <div>
      <Container>
        <Row className='mt-5 mb-2'>
          <Col lg={8} md={12} sm={12} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/kerala.jpg')} alt="GTHOLIDAYS" className="img-fluid" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>Text Overlay 1</span>
                <br></br>
           
                <span className='tbox'>Text Overlay 2</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/aus.jpg')} alt="GTHOLIDAYS" className="img-fluid" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>Text Overlay 2</span>
                <br></br>
           
                <span className='tbox' >Text Overlay 2</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/pool.jpg')} alt="GTHOLIDAYS" className="img-fluid" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>Text Overlay 2</span>
             
                <br></br>
                <span className='tbox' >Text Overlay 2</span>
                
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/street.jpg')} alt="GTHOLIDAYS" className="img-fluid" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'>Text Overlay 2</span>
                <br></br>
                
                <span className='tbox'>Text Overlay 2</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className='overlay-container'>
              <img src={require('../assets/play.jpg')} alt="GTHOLIDAYS" className="img-fluid" style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay-content">
                <span className='thead'> Text Overlay 2</span>
                <br></br>
                
                <span className='tbox' >Text Overlay 2</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Spot;
