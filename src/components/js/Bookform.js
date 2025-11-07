import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/Bookform.css"; // Import the CSS file for custom styles
import axios from "axios"; // Import axios for API requests

const Bookform = () => {
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
      <Form
        className="secondcolform mt-5 text-center with-shadow"
        onSubmit={handleSubmit}
      >
        <p
          style={{
            width: "80%",
            fontSize: "14px",
            fontWeight: "700",
            color: "#808080",
          }}
        >
          Get the Guaranteed Best Vacation Deals from GT Holidays
        </p>
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
            placeholder="dd-mm-yyyy"
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
    </>
  );
};

export default Bookform;
