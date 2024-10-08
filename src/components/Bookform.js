import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Bookform.css"; // Import the CSS file for custom styles

const Bookform = () => {
  return (
    <>
      <Form className="secondcolform mt-5 text-center with-shadow">
        {" "}
        {/* Add the "with-shadow" class */}
        <br />
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
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-4 gtform" controlId="formCity">
          <Form.Control
            className="formcontrol"
            type="text"
            placeholder="City of Residence"
          />
        </Form.Group>
        <Form.Group className="mb-4 gtform" controlId="formEmail">
          <Form.Control
            className="formcontrol"
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-4 gtform" controlId="formPhone">
          <Form.Control
            className="formcontrol"
            type="tel"
            placeholder="Phone Number"
          />
        </Form.Group>
        <Form.Group className="mb-4 gtform" controlId="formCity">
          <Form.Control
            className="formcontrol"
            type="text"
            placeholder="Destination"
          />
        </Form.Group>
        <Form.Group className="mb-4 gtform" controlId="formDate">
          <Form.Control
            className="formcontrol"
            type="date"
            placeholder="dd-mm-yyyy"
          />
        </Form.Group>
        <Form.Group className="mb-4 gtform" controlId="formPeople">
          <Form.Control
            className="formcontrol"
            type="number"
            placeholder="No. of people"
          />
        </Form.Group>
        <Form.Group className="mb-4 gtform" controlId="formVacationType">
          <Form.Select aria-label="Vacation Type">
            <option>Vacation Type</option>
            <option value="1">Honeymoon</option>
            <option value="2">Friends Trip</option>
            <option value="3">Family Trip</option>
            <option value="4">Corporate</option>
          </Form.Select>
        </Form.Group>
        <Button style={{ width: "60%" }} className="sbtn" type="submit">
          Submit form
        </Button>
        <br />
      </Form>
    </>
  );
};

export default Bookform;
