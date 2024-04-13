import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Topbar.css'

function Topbar() {
  return (
    <>
      <Navbar className="bg-dark justify-content-start">
        <Container>
          <Navbar.Brand href="#home">
            <span className="icon-container">
              <FontAwesomeIcon icon={faFacebook} style={{ color: 'yellow', marginRight: '10px' }} />
              <FontAwesomeIcon icon={faInstagram} style={{ color: 'yellow', marginRight: '10px' }} />
            </span>
            <span className='add'>| </span>
            <span className="mail-address">mail@gtholidays.in</span>
          </Navbar.Brand>
        </Container>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className='no'>+91 9597412167</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Topbar;
