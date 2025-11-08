import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '70vh', width: '100%', padding: '48px 16px' }}>
      <Container>
        <h1 className="fw-bold" style={{ fontSize: 72, lineHeight: 1, marginBottom: 8 }}>404</h1>
        <h4 className="mb-3" style={{ color: '#333' }}>Page not found</h4>
        <p className="mb-4" style={{ color: '#666', maxWidth: 720, margin: '0 auto' }}>
          The page you are looking for doesn’t exist or may have been moved.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
          <Link to="/">
            <Button style={{ backgroundColor: '#ffcc00', color: '#111', borderColor: '#ffcc00' }}>Go Home</Button>
          </Link>
          <Link to="/packages">
            <Button variant="outline-dark">Browse Packages</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
