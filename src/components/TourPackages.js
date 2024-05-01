import React, { useState } from "react";
import pack from "../assets/packagesimg.jpg.png";
import { Card, Row, Col, Container } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { ALLPACKAGES } from "./Allpackages";
import './TourPackages.css'
import { Link } from 'react-router-dom';

const TourPackages = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = ALLPACKAGES.filter((tourPackage) => {
    return (
      tourPackage.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tourPackage.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div>
        <img
          src={pack}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Container>
        <Row >
          <Col md={12} className="text-center">
           
          <Form>
                <input
                  type="text"
                  style={{ height: "50px", width: "60%" }}
                  placeholder="DESTINATION"
                  onChange={handleSearchChange}
                />
           
           <Button
                 variant="dark"
                 style={{
                     borderRadius: "0",
                     height: "50px",
                     marginBottom: "4px",
                     fontSize: "small",
                     fontWeight: "500",
                     border: "none" // or border: "0"
                  }}
                >
                  SEARCH
                </Button>
              </Form>
            
          </Col>
        </Row>
        <p className="mt-2" style={{ fontSize: "larger" }}>
          {filteredPackages.length} tours found
        </p>
        <Row className="package-container mt-4">
          {filteredPackages.map((tourPackage) => (
            <Col
              key={tourPackage.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-5"
            >
              <Card className="mb-3 h-100">
              <Link to={`/fullpackage/${tourPackage.id}`} children={tourPackage}>
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={tourPackage.Pimage}
                    className="package-image"
                  />
                </div>
                </Link>
                <Card.Body>
                  <Card.Text style={{ fontSize: "10px", color: "#888" }}>
                    <FaLocationDot /> {tourPackage.location}
                  </Card.Text>
                  <Card.Title style={{ fontSize: "18px", marginBottom: "4%" }}>
                    {tourPackage.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "orange" }}>
                    <CiClock2 /> {tourPackage.day}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TourPackages;
