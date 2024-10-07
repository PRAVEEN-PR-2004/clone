import React from "react";
import "./Address.css"; // Import the CSS file
import { Col, Form, Row, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Address = () => {
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

            <Form className="secondcolform mt-5">
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
                  placeholder="Date of Travel"
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
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Address;
