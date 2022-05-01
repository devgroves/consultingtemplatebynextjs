import React from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
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
      <Container>
        <Navbar
          className="navbar-bg"
          expand="lg"
          variant="light"
        >
          <Navbar.Brand onClick={() => navigate("home")} >
            <Image src={Logo} alt="DevGroves" width="90" height="70"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav>
              <Nav.Link onClick={() => navigate("")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("services")}>Services</Nav.Link>
              <Nav.Link onClick={() => navigate("about")}>About</Nav.Link>
              <Nav.Link onClick={() => navigate("contact")}>Contact</Nav.Link>
            </Nav>
        </Navbar>
        <hr></hr>
      </Container>
    </>
  );
}
