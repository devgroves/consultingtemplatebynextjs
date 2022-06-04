import React from "react";
import Image from "next/image";
import Image1 from "./images/3.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Devgroves from "./images/devgroves.png";
import ShopCart from "./images/shoppingcartbyjotai.png"
import ExampleRedux from "./images/redux.png"

export async function getServerSideProps(context) {
  const res =await fetch("https://api.github.com/users/devgroves/repos")
  const data = await res.json()
  return {
    props: {
      data
    }, 
  };
}
export default function About({data}) {
  console.log('props....', data)
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
            <Image src={Image1} alt="about image" height={400} width={600} className="imgContain" />
            <Breadcrumbs name="About Us" />
          </Col>
          <Col className="zeropadding" md={6} sm={12}>
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
                    <Col md={4} style={{ margin:10 }}>
                      <Image
                        src={val.image || Image1}
                        alt="about image"
                        height={400}
                        width={600}
                        className="imgContain"
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
