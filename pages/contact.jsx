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
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12}>
            <h4>Email Id:</h4> <span>devgrovestechnologies@gmail.com</span>
            <br/><br/>
            <h4>Contact Us:</h4> +91-96292-30494
            <br/><br/>
          </Col>
          <Col md={6} sm={12}>
            <div style={{ margin: '5px' }}> 
              <Image src={ContactUsImage} alt="Contact us image" height={400} width={600} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
