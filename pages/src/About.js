import React from "react";
import Image from "next/image";
import Image1 from "./services-1.jpg";
import { Container, Row, Col } from "react-bootstrap";
export default function About() {
  return (
    <div>
      {/* <div className="split" id="about">
        <div className="area-2 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>
                    {" "}
                    We contribute open source technical solutions to organizations and learning tutorials for developers
                    to learn.
                  </h1>
                  <p style={{ textAlign: "justify" }}>
                    Please check us out in Github{" "}
                    <a href="https://github.com/devgroves">https://github.com/devgroves</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="area-1"></div>
      </div> */}
      <Container id="about">
        <Row className="center">
          <Col md={6} sm={12}>
            <h3>
              {" "}
              We contribute open source technical solutions to organizations and learning tutorials for developers to
              learn.
            </h3>
            <p style={{ textAlign: "justify" }}>
              Please check us out in Github <a href="https://github.com/devgroves">https://github.com/devgroves</a>
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
