import React from "react";
import Image from "next/image";
import Image1 from "./images/3.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/users/devgroves/repos");
  const data = await res.json();
  console.log('data', data.filter((elem) => !elem.name.includes("tutorial")));
  const filteredData = data.filter((elem) => !elem.name.includes("tutorial")).map((elem) => {
    return { id: elem.id, name: elem.name, html_url: elem.html_url, description: elem.description, full_name: elem.full_name,
       language: elem.language, stargazers_count: elem.stargazers_count, forks: elem.forks };
  });
  return {
    props: {
      data: filteredData
    },
  };
}
export default function About({ data }) {
  return (
    <>
      <Head>
        <title>DevGroves - About Us</title>
        <html_url rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content=" We contribute open source technical solutions to organizations and learning tutorials for developers to learn."
        />
        <meta
          name="og:description"
          content=" We contribute open source technical solutions to organizations and learning tutorials for developers to learn."
        />
        <meta name="title" content="DevGroves - About Us" />
        <meta name="og:title" content="DevGroves - About Us" />
      </Head>
      <Header />
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12} className="mobile-container">
            <Image src={Image1} alt="about image"  />
            <Breadcrumbs name="About Us" />
          </Col>
          <Col md={6} sm={12}>
            <h3> We contribute open source technical solutions and learning tutorials for developers to learn.</h3>
            <br />
            <p style={{ textAlign: "justify" }}>
              Please check us out in Github <a href="https://github.com/devgroves">https://github.com/devgroves</a>
            </p>
          </Col>
        </Row>
        <h3 style={{ textAlign: "center", textDecoration: "underline", marginTop: 10 }}>
          OUR Public Code Repositories For Glance
        </h3>
        <Row>
          {data &&
            data.map((val) => (
              <Col key={val.id} md={6} sm={12}>
                <Card
                  style={{
                    minHeight: 120,
                    marginTop: 10,
                    backgroundColor: "gainsboro",
                    borderRadius: 20,
                  }}
                >
                  <Row>
                    <Col
                      md={4}
                      style={{
                        padding: 10,
                        margin: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={`https://raw.githubusercontent.com/${val.full_name}/main/demo.png` || Image1}
                        alt="image"
                        width={300}
                        height={250}
                      />
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Link href={val.html_url}>{val.name}</Card.Link>
                        <Card.Text style={{ fontSize: 12, marginTop: 8 }}>{val.description}</Card.Text>
                        <div
                          style={{
                            fontSize: 12,
                            marginTop: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>{val.language}</p>
                          <p> Stars:{val.stargazers_count}</p>
                          <p> Forks:{val.forks}</p>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
