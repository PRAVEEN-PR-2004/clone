import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminId');
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Manage Packages</Card.Title>
              <Card.Text className="flex-grow-1">
                Add, edit, or delete tour packages (ALLPACKAGES and PACKAGES)
              </Card.Text>
              <Link to="/admin/packages">
                <Button style={{ backgroundColor: '#ffcc00', color: 'black' }} className="w-100">Manage Packages</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>View Submissions</Card.Title>
              <Card.Text className="flex-grow-1">
                View all form submissions from the booking forms
              </Card.Text>
              <Link to="/admin/submissions">
                <Button style={{ backgroundColor: '#ffcc00', color: 'black' }} className="w-100">View Submissions</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;

