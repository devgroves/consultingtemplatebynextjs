import React from "react";
import Image from "next/image";
import Image1 from "./images/3.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import { GoPrimitiveDot, GoStar, GoRepoForked } from "react-icons/go";

function isReadyProject(elem) {
  let topics = elem.topics;
  let result = true;
  topics.forEach((topicName) => {
    if (topicName.search("wip-do-not-use") >= 0) {
      result = false;
    }
  });
  return result;
}

export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/users/devgroves/repos");
  const data = await res.json();
  // console.log('data', data.filter((elem) => !elem.name.includes("tutorial")));
  const filteredData = data.filter(elem => isReadyProject(elem)).map((elem) => {
    return {
      id: elem.id, name: elem.name, html_url: elem.html_url, description: elem.description, full_name: elem.full_name,
      language: elem.language, stargazers_count: elem.stargazers_count, forks: elem.forks
    };
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
            <Image src={Image1} alt="about image" height={400} width={600} className="imgContain" placeholder="blur" />
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
        <Row>
          <h3 className="repo-header">OUR Public Code Repositories For Glance</h3>
        </Row>
        <Row>
          {data &&
            data.map((val) => (
              <Col key={val.id} md={6} sm={12}>
                <Card className="repo-card">
                  <Row>
                    <Col md={4} className="projectCard">
                      <Image
                        src={`https://raw.githubusercontent.com/${val.full_name}/main/demo.png` || Image1}
                        alt="image"
                        width={300}
                        height={250}
                      />
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Link href={val.html_url}>{val.name}</Card.Link>
                        <Card.Text className="projectCard-text">{val.description}</Card.Text>
                        <div className="projectCard-body">
                          <p>
                            <GoPrimitiveDot /> {val.language}
                          </p>
                          <p>
                            <GoStar /> Stars:{val.stargazers_count}
                          </p>
                          <p>
                            <GoRepoForked /> Forks:{val.forks}
                          </p>
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
