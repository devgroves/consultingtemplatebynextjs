import React from "react";
import Image from "next/image";
import Image1 from "./contact.png";
import { Container, Row, Col } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      <Container id="contact" className="center" style={{ flexDirection: "column" }}>
        <Row style={{ width: "80%" }}>
          <Image src={Image1} alt="Contact" />
        </Row>
        <Row style={{ width: "80%" }} className="center">
          <Col md={6} sm={12}>
            <h4>Email Id: abc@gmail.com</h4>{" "}
          </Col>
          <Col md={6} sm={12}>
            <h4>Contact Us: +91-96292-30494</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
