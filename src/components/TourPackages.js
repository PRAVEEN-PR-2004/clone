import React, { useState } from "react";
import pack from "../assets/packagesimg.jpg.png";
import { Card, Row, Col, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { ALLPACKAGES } from "./Allpackages";
import './TourPackages.css'

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
        <Row className="align-items-center d-md-flex">
          <Col xs={12} md={12} className="d-flex">
            <span style={{ width: "calc(70% - 15px)" }}>
              <FloatingLabel
                controlId="floatingInput"
                label="Destination"
                className="mb-3"
                style={{ borderRadius: "0" }}
              >
                <Form.Control
                  type="text"
                  placeholder="name@example.com"
                  onChange={handleSearchChange}
                />
              </FloatingLabel>
            </span>
            <span style={{ width: "calc(30% - 15px)" }}>
              <Button
                variant="dark"
                style={{ width: "100%", height: "58px", borderRadius: "0" }}
              >
                SEARCH
              </Button>
            </span>
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
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={tourPackage.Pimage}
                    className="package-image"
                  />
                </div>
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