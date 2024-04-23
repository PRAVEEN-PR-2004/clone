import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Appbar.css';
import logog from "../assets/GT-Holidays-Logo.jpg";

function Appbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 768;

  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="changenav mb-3 sticky-top">
          <Container fluid>
            <Navbar.Brand href="#home" className="d-flex justify-content-center  ml-md-3">
              <img
                src={logog}
                width={isSmallScreen ? "150" : "250"}
                height="100"
                className="d-inline-block align-top img-fluid mx-auto img-responsive"
                alt="GT Holidays Logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  {/* Apply Bootstrap's .nav-link class to each Link component */}
                  <Link to="/" className="nav-link">HOME</Link>
                  <Link to="/company" className="nav-link">COMPANY</Link>
                  <Link to="/grouptour" className="nav-link">GROUP TOUR</Link>
                  <Link to="/packages" className="nav-link">PACKAGES</Link>
                  <Link to="/honeymoon" className="nav-link">HONEYMOON</Link>
                  <Link to="/cruises" className="nav-link">CRUISES</Link>
                  <Link to="/wedding" className="nav-link">WEDDING</Link>
                  <NavDropdown title="COMPANY" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Mumbai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Hyderabad</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Bangalore</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Chennai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Coimbatore</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Erode</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Madurai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Trichy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Apply Bootstrap's .dropdown-item class to each NavDropdown.Item component */}
                    <NavDropdown.Item as={Link} to="/company" className="dropdown-item">Salem</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Navbar.Text className="justify-content-end">
                  <span className='noo'>+91 9195412160</span>
                </Navbar.Text>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Appbar;
