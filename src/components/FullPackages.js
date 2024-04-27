import React from 'react'
import { useParams } from 'react-router-dom'
import { PACKAGES } from './Gtpackages';
import { Button, Col, Container, Row } from 'react-bootstrap';

const FullPackages = () => {
  const  {id}  = useParams();
  const reqdeltail = PACKAGES.find(pack => pack.id === parseInt(id));
  return (
  <Container>
    <Row>
      <Col md={8}>
      <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px" }}>{reqdeltail.day}</p>
            <p>{reqdeltail.location}</p>
      </div>
      <h1>{reqdeltail.name}</h1>
      <img src={reqdeltail.Pimage} alt='kk' style={{width:"100%",height:"50%"}} />

      </Col>
      <Col md={4}>
       <span><p>SUPER DEAL PRICE</p><Button>jjj</Button></span> 
      </Col>
    </Row>
  </Container>
  )
}

export default FullPackages













