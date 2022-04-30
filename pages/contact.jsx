import React from "react";
import Image from "next/image";
import Head from "next/head";
import Image1 from "./images/contact.png";
import { Container, Row, Col } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Dev Groves - Contact Us</title>
        <link rel="icon" href="./images/logo.png" />
        <meta
          name="description"
          content="DevGroves - Contact Us"
        />
      </Head>
      <Container id="contact" className="center container-height" style={{ flexDirection: "column" }}>
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
