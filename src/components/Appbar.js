// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";

// import logog from "../assets/GT-Holidays-Logo.jpg";
// import { useEffect, useState } from "react";
// import './Appbar.css'

// function Appbar() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const isSmallScreen = windowWidth <= 768; // Define the screen width breakpoint for small screens

//   return (
//     <>
      
//       {["xxl"].map((expand) => (
//         <Navbar key={expand} expand={expand} className="changenav mb-3 sticky-top">
//           <Container fluid>
//             <Navbar.Brand
//               href="#home"
//               className="d-flex justify-content-center  ml-md-3"
//             >
//               <img
//                 src={logog}
//                 width={isSmallScreen ? "150" : "250"} // Adjust the width based on screen size
//                 height="100"
//                 className="d-inline-block align-top img-fluid mx-auto img-responsive"
//                 alt="GT Holidays Logo"
//               />
//             </Navbar.Brand>

//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="start"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-center flex-grow-1 pe-3">
//                   <Nav.Link href="/">HOME</Nav.Link>
//                   <Nav.Link href="/company">COMPANY</Nav.Link>
//                   <Nav.Link href="/grouptour">GROUP TOUR</Nav.Link>
//                   <Nav.Link href="/packages">PACKAGES</Nav.Link>
//                   <Nav.Link href="/honeymoon">HONEYMOON</Nav.Link>
//                   <Nav.Link href="/cruises">CRUISES</Nav.Link>
//                   <Nav.Link href="/wedding">WEDDING</Nav.Link>
//                   <NavDropdown
//                     title="COMPANY"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="/company">Mumbai</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/company">
//                       Hyderabad
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/company">
//                       Bangalore
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/company">Chennai</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/company">
//                       Coimbatore
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />

//                     <NavDropdown.Item href="/company">Erode</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/company">Madurai</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/company">Trichy</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="/company">Salem</NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                   <Navbar.Text className="justify-content-end">
//                   <span className='noo' style={{color:'black'}}>+91 9195412160</span>
//                 </Navbar.Text>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
         
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default Appbar;
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
                  {/* Replace href with Link */}
                  <Link to="/">HOME</Link>
                  <Link to="/company">COMPANY</Link>
                  <Link to="/grouptour">GROUP TOUR</Link>
                  <Link to="/packages">PACKAGES</Link>
                  <Link to="/honeymoon">HONEYMOON</Link>
                  <Link to="/cruises">CRUISES</Link>
                  <Link to="/wedding">WEDDING</Link>
                  <NavDropdown title="COMPANY" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="/company">Mumbai</NavDropdown.Item>
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Mumbai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Hyderabad</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Bangalore</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Chennai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Coimbatore</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Erode</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Madurai</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Trichy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* Replace href with Link */}
                    <NavDropdown.Item to="/company">Salem</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Navbar.Text className="justify-content-end">
                  <span className='noo' style={{color:'black'}}>+91 9195412160</span>
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
