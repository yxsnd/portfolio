import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faY } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faCode} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{ maxHeight: "100px", width: "100%" }}
            className="justify-content-end"
          >
            <NavLink
              className="nav-link"
              to="/"
            >
              About
            </NavLink>
            <NavLink className="nav-link" to="">
              Projects
            </NavLink>
            <NavLink className="nav-link" to="/">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/">
              GitHub
            </NavLink>
            <Button variant="outline-primary" className="me-2">
              Resume
            </Button>
          </Nav>
          {/* <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
