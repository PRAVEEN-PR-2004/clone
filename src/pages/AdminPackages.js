import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert, Badge } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [formData, setFormData] = useState({
    location: '',
    name: '',
    day: '',
    Pimage: '',
    packageType: 'ALLPACKAGES'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAdmin')) {
      navigate('/admin/login');
      return;
    }
    fetchPackages();
  }, [navigate]);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/packages');
      setPackages(response.data);
    } catch (err) {
      setError('Error fetching packages');
    }
  };

  const handleAdd = () => {
    setEditingPackage(null);
    setFormData({
      location: '',
      name: '',
      day: '',
      Pimage: '',
      packageType: 'ALLPACKAGES'
    });
    setShowModal(true);
  };

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setFormData({
      location: pkg.location,
      name: pkg.name,
      day: pkg.day,
      Pimage: pkg.Pimage,
      packageType: pkg.packageType
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        await axios.delete(`http://localhost:3000/api/packages/${id}`);
        setSuccess('Package deleted successfully');
        fetchPackages();
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Error deleting package');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (editingPackage) {
        await axios.put(`http://localhost:3000/api/packages/${editingPackage._id}`, formData);
        setSuccess('Package updated successfully');
      } else {
        await axios.post('http://localhost:3000/api/packages', formData);
        setSuccess('Package created successfully');
      }
      setShowModal(false);
      fetchPackages();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error saving package');
    }
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Packages</h2>
        <Button variant="success" onClick={handleAdd}>
          Add New Package
        </Button>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Duration</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg._id}>
              <td>{pkg._id}</td>
              <td>{pkg.name}</td>
              <td>{pkg.location}</td>
              <td>{pkg.day}</td>
              <td>
                <Badge bg={pkg.packageType === 'ALLPACKAGES' ? 'primary' : 'info'}>
                  {pkg.packageType}
                </Badge>
              </td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(pkg)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(pkg._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingPackage ? 'Edit Package' : 'Add New Package'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Package Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration (e.g., "4 Nights 5 Days")</Form.Label>
              <Form.Control
                type="text"
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={formData.Pimage}
                onChange={(e) => setFormData({ ...formData, Pimage: e.target.value })}
                placeholder="Enter image URL or path"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Package Type</Form.Label>
              <Form.Select
                value={formData.packageType}
                onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
              >
                <option value="ALLPACKAGES">ALLPACKAGES</option>
                <option value="PACKAGES">PACKAGES</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editingPackage ? 'Update' : 'Create'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default AdminPackages;

