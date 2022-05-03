import React, { useState } from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../pages/images/logo.png";

export default function Header() {
  const router = useRouter();
  const navigate = (a) => {
    router.push(`/${a}`);
    console.log("location ", a, router.pathname);
  };
  return (
    <>
      <Container>
        <Navbar className="navbar-bg">
          <Navbar.Brand onClick={() => navigate("home")} >
            <Image src={Logo} className="brandlogo" alt="DevGroves" width="90" height="70"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <Nav.Link className={`${router.pathname === "/" ? "activeNav" : ""}`} onClick={() => navigate("")}>
              Home
            </Nav.Link>
            <Nav.Link
              className={`${router.pathname === "/services" ? "activeNav" : ""}`}
              onClick={() => navigate("services")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={`${router.pathname === "/about" ? "activeNav" : ""}`}
              onClick={() => navigate("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={`${router.pathname === "/contact" ? "activeNav" : ""}`}
              onClick={() => navigate("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar>
        <hr className="zeroMargin"></hr>
      </Container>
    </>
  );
}
