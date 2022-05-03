import React from "react";
import Image from "next/image";
import Head from "next/head";
import ContactUsImage from "./images/contactus.png";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Dev Groves - Contact Us</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="DevGroves - Contact Us" />
      </Head>
      <Header />
      <Container >
          <Row className="center container-height">
            <Col md={6} sm={12}>
              <h4>Email Id: abc@gmail.com</h4>
              <h4>Contact Us: +91-96292-30494</h4>
            </Col>
            <Col md={6} sm={12} >
              <Image src={ContactUsImage} layout="responsive" alt="Contact" />
            </Col>
          </Row>
      </Container>
      <Footer />
    </>
  );
}
