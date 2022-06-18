import React from "react";
import Image from "next/image";
import Head from "next/head";
import ContactUsImage from "./images/contactus.png";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FormImage from "./images/contact-form.png"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Dev Groves - Contact Us</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="DevGroves - Contact Us" />
        <meta name="title" content="DevGroves - Contact Us" />
        <meta name="og:description" content="DevGroves - Contact Us" />
        <meta name="og:title" content="DevGroves - Contact Us" />
      </Head>
      <Header />
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12} className="mobile-container">
            <Image
              src={ContactUsImage}
              alt="Contact us image"
              height={400}
              width={600}
              placeholder="blur"
              className="imgContain"
            />
            <Breadcrumbs name="Contact us" />
          </Col>
          <Col className="zeropadding" md={6} sm={12}>
            <h4>Email Id:</h4> <span>devgrovestechnologies@gmail.com</span>
            <br />
            <br />
            <h4>Contact Us:</h4> +91-96292-30494
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col className="center">
            <Image src={FormImage}  alt=" form image" />
          </Col>
          <Col>
            <div className="form-container">
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="firstname" placeholder="Your name.." />

                <label htmlFor="number">Contact Number</label>
                <input type="number" id="number" name="number" placeholder="Your number" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" />

                <label htmlFor="file">Attachment</label>
                <input type="file" id="file" name="file" placeholder="Attach Your file" />

                <label htmlFor="subject">Description</label>
                <textarea id="subject" name="subject" placeholder="Write something..">

                </textarea>

                <input type="submit" value="Submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
