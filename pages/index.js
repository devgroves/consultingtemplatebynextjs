import React from "react";
import Image from "next/image";
import Image1 from "./images/1.png";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "./../components/Breadcrumbs";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevGroves - Home Page</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="We work for consultancies, organizations and freelancers to build web applications, rest apis and chat bots."
        />
      </Head>
      <Header />
      <Container>
        <Row className="center container-height">
          <Col className="zeropadding" md={6} sm={12}>
            <h2>DevGroves is a dev community synergized to built performance efficient technical solutions.</h2>
            <br />
            <h6 style={{ textAlign: "justify" }}>
              We work for consultancies, organizations and freelancers to build web applications, rest apis and chatchat
            </h6>
            <br />
            <p style={{ textAlign: "justify" }}>
              Developers working from different software companies with like minded connecting together to provide
              solutions without technical bottlenecks
            </p>
            <p style={{ textAlign: "justify" }}>
              As we have senior dev peoples, we can work on technically intensiv code development. Also make the cross
              platform desktop and mobile solutions using web technologies.
            </p>
          </Col>
          <Col md={6} sm={12} xs={{ order: "first" }} className="mobile-container">
            <Image src={Image1} alt="Home page picture" height={400} width={600} className="imgContain" />
            <Breadcrumbs name="Home" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
