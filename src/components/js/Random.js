import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { getPackages } from "../../utils/api";

const Random = ({ currentPackageId = null }) => {
  const [randomPackages, setRandomPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPackages = async () => {
      try {
        // Fetch all packages
        const allPackages = await getPackages('ALLPACKAGES');
        
        // Exclude the current package if provided
        const filteredPackages = currentPackageId
          ? allPackages.filter(pkg => pkg._id !== currentPackageId)
          : allPackages;
        
        // Shuffle the array
        const shuffled = [...filteredPackages].sort(() => Math.random() - 0.5);
        
        // Take the first 10 packages
        const random = shuffled.slice(0, 10);
        
        setRandomPackages(random);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching random packages:', error);
        setLoading(false);
      }
    };

    fetchRandomPackages();
  }, [currentPackageId]);

  if (loading) {
    return (
      <Container>
        <p>Loading recommendations...</p>
      </Container>
    );
  }

  if (randomPackages.length === 0) {
    return null;
  }

  return (
    <>
      <Container>
        <Row className="package-container">
          {randomPackages.map((pkg) => (
            <Col key={pkg._id} xs={12} sm={6} md={4} lg={3} className="mb-5">
              <Card className="mb-3 h-100">
                <Link to={`/fullpackage/${pkg._id}`} children={pkg}>
                  <div className="image-container">
                    <Card.Img variant="top" src={pkg.Pimage} className="package-image" />
                  </div>
                </Link>

                <Card.Body>
                  <Card.Text style={{ fontSize: "10px", color: "#888" }}>
                    <FaLocationDot /> {pkg.location}
                  </Card.Text>
                  <Card.Title style={{ fontSize: "18px", marginBottom: "4%" }}>
                    {pkg.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "orange" }}>
                    <CiClock2 /> {pkg.day}
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
