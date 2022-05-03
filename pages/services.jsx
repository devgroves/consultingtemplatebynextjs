import React from "react";
import Image from "next/image";
import Image1 from "./images/2.png";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Services() {
  return (
    <>
      <Head>
        <title>Dev Groves - Services</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="We offer the below services.Build static and dynamic responsive website.Enterprise grade REST APIs develop using Java or node.Js technologies,Write Technical Blogs on multiple sites,Create ChatBots for conversational requirements with apis"
        />
      </Head>
      <Header />
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12}>
            <div className="text-container">
              <h2>Begin the journey, by providing the below services: </h2>
              <br/>
              <>
                <ul>
                  <li>
                    <span>Build static and dynamic responsive websites. Static sites can be developed using javascript technologies like angular, react or jQuery. Dynamic sites like payroll, CRM, or job portals.&nbsp;</span>
                  </li>
                  <li>
                    <span>Enterprise grade REST APIs developed using Java or nodeJs technologies with scalability. We develop distributed architecture of microservices with Elastic Load Balancers.</span>
                  </li>
                  <li>
                    <span>Write Technical Content Blogs on multiple sites. Technical Blogs will be benchmarking the technologies, doing the POC and exploring the features of the framework.</span>
                  </li>
                  <li>
                    <span>Create ChatBots for conversational requirements with apis. Also stock alert kind of chat bots.</span>
                  </li>
                </ul>
              </>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Image src={Image1} alt="Services image" height={400} width={600}/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
