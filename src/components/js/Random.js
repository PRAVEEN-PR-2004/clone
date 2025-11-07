import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ALLPACKAGES } from "./Allpackages";


const Random = () => {
  // Shuffle the ALLPACKAGES array
  const shuffledPackages = ALLPACKAGES.sort(() => Math.random() - 0.5);
  // Take the first 10 packages
  const randomPackages = shuffledPackages.slice(0, 10);

  return (
    <>
      <Container>
        <Row className="package-container">
          {randomPackages.map((packages) => (
            <Col key={packages.id} xs={12} sm={6} md={4} lg={3} className="mb-5">
              <Card className="mb-3 h-100">
                <Link to={`/fullpackage/${packages.id}`} children={packages}>
                  <div className="image-container">
                    <Card.Img variant="top" src={packages.Pimage} className="package-image" />
                  </div>
                </Link>

                <Card.Body>
                  <Card.Text style={{ fontSize: "10px", color: "#888" }}>
                    <FaLocationDot /> {packages.location}
                  </Card.Text>
                  <Card.Title style={{ fontSize: "18px", marginBottom: "4%" }}>
                    {packages.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "orange" }}>
                    <CiClock2 /> {packages.day}
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

export default Random;
