import React from "react";
import Image from "next/image";
import Image1 from "./services-1.jpg";
import { Container, Row, Col } from "react-bootstrap";
export default function Details() {
  return (
    <div>
      <Container id="introduction">
        <Row className="center">
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
    </div>
  );
}
