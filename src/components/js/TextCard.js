
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaGlobeAmericas, FaChild } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import "../style/TextCard.css";

const cardData = [
  {
    icon: <FaChild size={100} />,
    head1: "50,000+",
    head2: "Abroad Trips",
    text: "For the last decade, GT Holidays have organized more than 50,000 international itineraries."
  },
  {
    icon: <MdAddLocationAlt size={100} />,
    head1: "Handcrafted",
    head2: "Experiences",
    text: "Each and every itinerary is customized according to the taste of the customers."
  },
  {
    icon: <FaGlobeAmericas size={100} />,
    head1: "Extremely Happy",
    head2: "Travellers",
    text: "GT Holidays hold a record of great customer satisfaction, and all customers are retained with us."
  }
];

const ThreeCardsRow = () => {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        {cardData.map((item, index) => (
          <Col md={4} sm={12} className="mb-3" key={index}>
            <Card className="h-100">
              <div className="mx-auto mt-3 icon-yellow">{item.icon}</div>
              <Card.Body>
                <Card.Title className="text-center head">{item.head1}</Card.Title>
                <Card.Title className="text-center head">{item.head2}</Card.Title>
                <Card.Text className="text-center para">{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ThreeCardsRow;
