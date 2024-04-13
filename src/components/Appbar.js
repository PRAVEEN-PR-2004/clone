import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Topbar from "./Topbar";
import logog from "../assets/GT-Holidays-Logo.jpg";

function OffcanvasExample() {
  return (
    <>
      <Topbar />
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Navbar.Brand
              href="#home"
              className="d-flex justify-content-center justify-content-md-start ml-md-3"
              style={{ marginLeft: '40px' }}
            >
              <img
                src={logog}
                width="250"
                height="100"
                className="d-inline-block align-top img-fluid mx-auto"
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
                  <Nav.Link href="#action1">HOME</Nav.Link>
                  <NavDropdown
                    title="COMPANY"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">GROUP TOUR</Nav.Link>
                  <NavDropdown
                    title="PACKAGES"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="HONEYMOON"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">CRUISES</Nav.Link>
                  <NavDropdown
                    title="WEDDING"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="COMPANY"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Mumbai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">
                      Hyderabad
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">
                      Bangalore
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Chennai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Coimbatore
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action4">Erode</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Madurai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Trichy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Salem</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
