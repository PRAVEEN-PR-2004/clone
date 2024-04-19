import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import './TextCard.css'

const ThreeCardsRow = () => {
  return (
    <Container>
      
      <Row className="mt-5 mb-5">
        <Col md={4} sm={12} className="mb-3">
          <Card className="h-100">
            <FaChild  className="mx-auto mt-3 icon-yellow" size={100} />
            <Card.Body>
              <Card.Title className="text-center head">50,000+</Card.Title>
              <Card.Title className="text-center head">Abroad Trips</Card.Title>
              <Card.Text className="text-center para">
                For the last decade, GT Holidays have organized more than 50,000 international itineraries.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-3">
          <Card className="h-100">
            <MdAddLocationAlt className="mx-auto mt-3 icon-yellow" size={100} />
            <Card.Body>
              <Card.Title className="text-center head">Handcrafted</Card.Title>
              <Card.Title className="text-center head">Experiences</Card.Title>
              <Card.Text className="text-center para">
                Each and every itinerary is customized according to the taste of the customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-3">
          <Card className="h-100">
            <FaGlobeAmericas className="mx-auto mt-3 icon-yellow" size={100} />
            <Card.Body>
              <Card.Title className="text-center head">Extremely Happy</Card.Title>
              <Card.Title className="text-center head">Travellers</Card.Title>
              <Card.Text className="text-center para">
                GT Holidays hold a record of great customer satisfaction, and all customers are retained with us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeCardsRow;
