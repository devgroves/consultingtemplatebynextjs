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
const details = [
  {
    name: "Consulting Template by Nextjs",
    link: "https://github.com/devgroves/consultingtemplatebynextjs",
    description:
      "A IT consultancy website template with server side rendering to make the page load faster using Next js",
    id: 1,
    language: "JavaScript",
    stars: "1",
    forks: "1",
    image: Devgroves,
  },
  {
    id: 2,
    name: "Shopping Cart by Jotai",
    description:
      "Shopping cart example shown in redux offical site is rewritten in jotai to explain the easness and light weightness of the framework",
    link: "https://github.com/devgroves/shoppingcartbyjotai",
    language: "JavaScript",
    stars: "1",
    forks: "1",
    image: ShopCart,
  },
  {
    id: 3,
    name: "Redux Example in Jotai",
    description: "redux example of cart creation rewritten in jotai",
    link: "https://github.com/devgroves/reduxexampleinjotai",
    language: "JavaScript",
    stars: "",
    forks: "",
    image: ExampleRedux,
  },
  {
    id: 4,
    name: "springmongotutorial",
    description: "springmongotutorial",
    link: "https://github.com/devgroves/springmongotutorial",
    language: "JavaScript",
    stars: "",
    forks: "",
    image: "",
  },
  {
    id: 5,
    name: "reactmedialightgallery",
    description:
      "Media gallery to show and run through the media items in the gallery with full page view. It is done by react as component to use in react web application. It supports media items like image, audio, video.",
    link: "https://github.com/devgroves/reactmedialightgallery",
    language: "JavaScript",
    stars: "",
    forks: "",
    image: "https://github.com/devgroves/reactmedialightgallery/raw/main/reactmedialightgallery.png",
  },
];
export default function About() {
  return (
    <>
      <Head>
        <title>DevGroves - About Us</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
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
          {details &&
            details.map((val) => (
              <Col key={val.id} md={6} sm={12}>
                <Card
                  style={{
                    minHeight: 120,
                    marginTop: 10,
                    backgroundColor: "gainsboro",
                  }}
                >
                  <Row>
                    <Col md={5} >
                      <Image
                        src={val.image || Image1}
                        alt="about image"
                        height={400}
                        width={600}
                        className="imgContain"
                      />
                    </Col>
                    <Col >
                      <Card.Body>
                        <Card.Link href={val.link}>{val.name}</Card.Link>
                        <Card.Text style={{ fontSize: 12, marginTop: 8 }}>{val.description}</Card.Text>
                        <div style={{
                           fontSize: 12,
                            marginTop: 8 ,
                            display:'flex',
                            alignItems:"center",
                            justifyContent:"space-between" 
                            }}>
                          <p>{val.language}</p>
                          <p> Stars:{val.stars}</p>
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
