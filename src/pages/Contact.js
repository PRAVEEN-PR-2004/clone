import React, { useEffect } from 'react';
import { CITY } from '../components/City';
import { useParams } from 'react-router-dom';
import Linkcom from '../components/Linkcom';
import { Col, Container, Row } from 'react-bootstrap';

import Footer from '../components/Footer';
import Address from '../components/Address';

const Contact = () => {
  const { city } = useParams();
  const contactcity = CITY.find(cities => cities.scity === city);
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <div>
        <img
          src={contactcity.bimg}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto", marginBottom: "5px" }}
        />
      </div>
      <Linkcom children={contactcity.scity} />
      <Container>
       
          <Row className='mb-5'>
            <Col sm={12} md={7} style={{ height: "100%" }}>
              <div>
                {contactcity.iframe}
              </div>
            </Col>
            <Col md={5} style={{ height: "100%" }}>
              <img alt='city' src={contactcity.cityimg} style={{ width: "100%", height: "500px" }} />
            </Col>
          </Row>
       
          <p style={{ fontSize: "30px" }}>{contactcity.head1}</p>
          <p style={{ fontSize: "15px", color: "gray" }}>{contactcity.para1}</p>
          <p style={{ fontSize: "30px" }}>{contactcity.head2}</p>
          <p style={{ fontSize: "15px", color: "gray" }}>{contactcity.para2}</p>
       
      </Container>
      <Address />
      <Footer />
    </>
  );
};

export default Contact;
