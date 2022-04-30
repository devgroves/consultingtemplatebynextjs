import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../pages/images/logo.png";
export default function Header() {
  const router = useRouter();
  const navigate = (a) => {
    router.push(`/${a}`);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand onClick={() => navigate("home")}>
            <Image src={Logo} alt="DevGroves" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={() => navigate("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("services")}>Services</Nav.Link>
              <Nav.Link onClick={() => navigate("about")}>About</Nav.Link>
              <Nav.Link onClick={() => navigate("contact")}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
