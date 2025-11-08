import React, { useState, useEffect } from 'react';
import { Container, Table, Alert, Badge } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAdmin')) {
      navigate('/admin/login');
      return;
    }
    fetchSubmissions();
  }, [navigate]);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/submissions');
      setSubmissions(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching submissions');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <h2>Form Submissions</h2>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Form Submissions</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      {submissions.length === 0 ? (
        <Alert variant="info">No submissions found.</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Destination</th>
              <th>Date of Travel</th>
              <th>People</th>
              <th>Vacation Type</th>
              <th>Submitted Date</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={submission._id}>
                <td>{index + 1}</td>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>{submission.city}</td>
                <td>{submission.destination}</td>
                <td>{formatDate(submission.dateOfTravel)}</td>
                <td>{submission.people}</td>
                <td>
                  <Badge bg="info">{submission.vacationType || 'N/A'}</Badge>
                </td>
                <td>{formatDate(submission.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <div className="mt-3">
        <p className="text-muted">Total Submissions: {submissions.length}</p>
      </div>
    </Container>
  );
};

export default AdminSubmissions;

