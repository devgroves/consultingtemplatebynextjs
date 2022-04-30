import React from "react";
import Image from "next/image";
import Image1 from "./images/1.png";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevGroves - Home Page</title>
        <link rel="icon" href="./images/logo.png" />
        <meta
          name="description"
          content="We work for consultancies, organizations and freelancers to build web applications, rest apis and provide performance efficient solutions."
        />
      </Head>
      <Header />
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12}>
            <h3>
              DevGroves is group of devs synergized to built performance
              efficient technical solutions.
            </h3>
            <p style={{ textAlign: "justify" }}>
              We work for consultancies, organizations and freelancers to build
              web applications, rest apis and provide performance efficient
              solutions.
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
