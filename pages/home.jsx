import React from "react";
import Image from "next/image";
import Image1 from "./images/1.png";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="./images/logo.png" />
        <meta
          name="description"
          content=" We work for consultancies, organizations and freelancers closely work with them to solve the technical
          problems also offer them the programming services."
        />
      </Head>
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12}>
            <h3>DevGroves is group of devs synergized to built performance efficient technical solutions.</h3>
            <p style={{ textAlign: "justify" }}>
              We work for consultancies, organizations and freelancers closely work with them to solve the technical
              problems also offer them the programming services.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <Image src={Image1} alt="Picture of the author" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
