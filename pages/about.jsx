import React from "react";
import Image from "next/image";
import Image1 from "./images/3.png";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>DevGroves - About Us</title>
        <link rel="icon" href="./images/logo.png" />
        <meta
          name="description"
          content=" We contribute open source technical solutions to organizations and learning tutorials for developers to learn."
        />
      </Head>
      <Container>
        <Row className="center container-height">
          <Header />
          <Col md={6} sm={12}>
            <h3>
              {" "}
              We contribute open source technical solutions to organizations and
              learning tutorials for developers to learn.
            </h3>
            <p style={{ textAlign: "justify" }}>
              Please check us out in Github{" "}
              <a href="https://github.com/devgroves">
                https://github.com/devgroves
              </a>
            </p>
          </Col>
          <Col md={6} sm={12}>
            <Image
              src={Image1}
              alt="Picture of the author"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
