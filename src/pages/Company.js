import React,{useEffect} from 'react';
import Linkcom from "../components/Linkcom";
import companyimg from '../assets/companyimg.png'
import companyimg1 from '../assets/companyimg2.jpg'
import companyimg2 from '../assets/com.png'
import owner from '../assets/owner.jpg'

import { Col,Row, Container,Card } from 'react-bootstrap';
import Footer from '../components/Footer';
const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <div style={{ marginBottom: "1%" }}>
        <img
          src={companyimg}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Linkcom children={"Company"}/>
      <Container className='mt-5' >
        <Row className='mt-1 mb-5'>
          <Col md={6}>
            <img src={companyimg1} style={{width:"100%"}} alt="Holidays Banner"/>
          </Col>
          <Col md={6}>
            <img src = {companyimg2} style={{width:"100%"}} alt="Holidays Banner"/>
          </Col>
        </Row>
        <h3 style={{fontFamily:"Playfair Display, serif"}} className='text-center'>Our Story</h3>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Established in 1968, GT Holidays is entirely owned and managed by Sangam Group of Hotels. The Sangam Group is recognized as one of the largest hotel chains in Tamil Nadu. Along with the Group, the GT Holidays is striving hard for ultimate success and innovation.</p>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>We are an ISO 9001: 2008 certified company that aim to set clear goals, fix the priorities and organize the resources effectively. GT Holidays enables you to discover a new destination and offer unique ideas to your travel.</p>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Our travel company offers a complete business travel environment for MICE (Meetings, Incentives, Conferences and Events) services at affordable cost. We provide a wide range of holiday tour packages for all the domestic and international destinations across the world.</p>

        <hr style={{ borderTop: "2px solid #BDBDBD", width: "100%" ,marginTop:"3.5%",marginBottom:"2%"}} />
        <Row>
          <Col md={6}>
          
          <h3 style={{fontFamily:"Playfair Display, serif"}} >Our Mission</h3>
          <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>GT Holidays is a full integrated travel company that offers comprehensive solutions for all the business and leisure travelers across the world. This prestigious travel company in Chennai mainly aims to satisfy the client’s requirements with ultimate transparency and cost-effectiveness. We assure to offer round the clock support and assistance at any point of your travel. </p>

          </Col>
          <Col md={6}>
          <h3 style={{fontFamily:"Playfair Display, serif"}} >Our Vision</h3>
          <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Our GT Team is striving hard to become the world class travel company and industry leader in the near future. We are planning to focus on customer centric approach and gain recognition among the worldwide clients. The travel company believes in maintaining highest quality standards and craft extraordinary moments especially for you.</p>
          </Col>
        </Row>
        <Row className='mt-5 mb-5'>
          <Col md={3}>
            <img src={owner} alt='owner' style={{width:"100%",height:"80%"}}/>
            <br></br>
            <br></br>
            <span className='text-center'>
            <p style={{color:"#808080",fontFamily:"Poppins, sans-serif !important;",marginBottom:"0px",fontWeight:"700"}}>Karthik M Manikandan</p>
            <p style={{color:"#808080",fontFamily:"Poppins, sans-serif !important;",fontSize:"14px"}}>Founder & CEO</p>
            </span>

          </Col>
          <Col md={9} className='d-flex' style={{alignItems:"center",justifyContent:"center"}}>
            <div>

          <h3 style={{fontFamily:"Playfair Display, serif"}} className='text-center' >CEO's Note</h3>
          <p style={{color:"#808080",fontFamily:"Poppins, sans-serif !important;",fontSize:"14px"}}>“GT Holidays was instituted on strong conviction and strategic vision. Powered by a dedicated team of professionals and headed by visionary leaders, our highly devoted workforce has built the company brick by brick. The repute which the GT Holidays enjoys today is built upon loyal and unstinting customer support, painstakingly nurtured through the years. GT Holidays has, over the years, established a formidable presence in Tamil Nadu and emerged as South India’s No.1 travel company.”</p>
            </div>
            

          </Col>
        </Row>
        <Row className="mt-5 mb-5">
        <Col md={3} sm={12} className="mb-3">
          <Card className="h-100 p-5 text-center" style={{border:"4px solid #fcb900"}}>
            
            <Card.Body>
            
              <Card.Title className="text-center head" style={{fontFamily:" sans-serif ",fontSize:"25px"}}>1000K+</Card.Title>
              <Card.Text className="text-center para" >
               Partners
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12} className="mb-3">
          <Card className="h-100 p-5 text-center" style={{border:"4px solid #fcb900"}}>
           
            <Card.Body>
              <Card.Title className="text-center head" style={{fontFamily:" sans-serif ",fontSize:"25px"}}>2k+</Card.Title>
              
              <Card.Text className="text-center para">
               Properties
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12} className="mb-3">
          <Card className="h-100 p-5 text-center" style={{border:"4px solid #fcb900"}}>
            
            <Card.Body>
             
              <Card.Title className="text-center head" style={{fontFamily:" sans-serif ",fontSize:"25px"}}>300K+</Card.Title>
              <Card.Text className="text-center para">Destinations</Card.Text>
                
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12} className="mb-3">
          <Card className="h-100 p-5 text-center" style={{border:"4px solid #fcb900"}}>
            
            <Card.Body>
             
              <Card.Title className="text-center head" style={{fontFamily:" sans-serif ",fontSize:"25px"}}>40K+</Card.Title>
              <Card.Text className="text-center para">Bookings</Card.Text>
                
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Company