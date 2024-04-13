import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Topbar() {
  return (
    <>
      <Navbar className="bg-dark justify-content-start">
        <Container>
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'yellow', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'yellow' }} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
