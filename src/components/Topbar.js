import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Topbar.css'

function Topbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 768; // Adjust the breakpoint as needed

  return (
    <>
      <Navbar className="changetop justify-content-start">
        <Container>
          {isSmallScreen ? (
            <Navbar.Brand href="#home">
              <span className="icon-container">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'yellow', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'yellow', marginRight: '10px' }} />
              </span>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand href="#home">
              <span className="icon-container">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'yellow', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'yellow', marginRight: '10px' }} />
              </span>
              <span className='add'>| </span>
              <span className="mail-address">mail@gtholidays.in</span>
            </Navbar.Brand>
          )}
        </Container>
        {isSmallScreen ? (

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className='no'></span>
          </Navbar.Text>
        </Navbar.Collapse>

        ):
        (
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className='no'>+91 9597412167</span>
          </Navbar.Text>
        </Navbar.Collapse>
        )}
      </Navbar>
    </>
  );
}

export default Topbar;
