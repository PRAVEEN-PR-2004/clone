import React, { useState } from "react";
import axios from "axios"; // Import axios
import "../style/Address.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Address = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    destination: "",
    dateOfTravel: "",
    people: "",
    vacationType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const response = await axios.post(
        "http://localhost:3000/submitData",
        formData
      );
      if (response.status === 201) {
        alert("Form submitted successfully!");
        // Reset form fields after submission
        setFormData({
          name: "",
          city: "",
          email: "",
          phone: "",
          destination: "",
          dateOfTravel: "",
          people: "",
          vacationType: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className="address mt-5 mb-5">
        <Row className="rc">
          <Col lg={6} md={6} sm={12} className="firstcol mb-4">
            <h2 className="mt-5 mb-4">Stay Connected</h2>
            <FaPhoneAlt className="mb-2" size={30} />
            <h4 className="h4map">+91 9940882200</h4>
            <IoMail className="mb-2" size={30} />
            <h4 className="h4map">mail@gtholidays.in</h4>
          </Col>
          <Col lg={6} md={6} sm={12} className="secondcol">
            <h2>Book Your Dream Vacation Today!</h2>
            <Form className="secondcolform mt-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-4 gtform" controlId="formName">
                <Form.Control
                  className="formcontrol"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4 gtform" controlId="formCity">
                <Form.Control
                  className="formcontrol"
                  type="text"
                  name="city"
                  placeholder="City of Residence"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4 gtform" controlId="formEmail">
                <Form.Control
                  className="formcontrol"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4 gtform" controlId="formPhone">
                <Form.Control
                  className="formcontrol"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4 gtform" controlId="formDestination">
                <Form.Control
                  className="formcontrol"
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4 gtform" controlId="formDate">
                <Form.Control
                  className="formcontrol"
                  type="date"
                  name="dateOfTravel"
                  placeholder="Date of Travel"
                  value={formData.dateOfTravel}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4 gtform" controlId="formPeople">
                <Form.Control
                  className="formcontrol"
                  type="number"
                  name="people"
                  placeholder="No. of people"
                  value={formData.people}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4 gtform" controlId="formVacationType">
                <Form.Select
                  aria-label="Vacation Type"
                  name="vacationType"
                  value={formData.vacationType}
                  onChange={handleChange}
                >
                  <option value="">Vacation Type</option>
                  <option value="Honeymoon">Honeymoon</option>
                  <option value="Friends Trip">Friends Trip</option>
                  <option value="Family Trip">Family Trip</option>
                  <option value="Corporate">Corporate</option>
                </Form.Select>
              </Form.Group>
              <Button style={{ width: "60%" }} className="sbtn" type="submit">
                Submit form
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Address;
