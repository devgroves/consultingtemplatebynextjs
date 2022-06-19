import React from "react";
import Image from "next/image";
import Head from "next/head";
import ContactUsImage from "./images/contactus.png";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Contact() {
   const handleSubmit =async (data) => {
    console.log('data', data)
    const res = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log("handle submit ", result);
   }
  return (
    <>
      <Head>
        <title>Dev Groves - Contact Us</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="DevGroves - Contact Us" />
        <meta name="title" content="DevGroves - Contact Us" />
        <meta name="og:description" content="DevGroves - Contact Us" />
        <meta name="og:title" content="DevGroves - Contact Us" />
      </Head>
      <Header />
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12} className="mobile-container">
            <Image
              src={ContactUsImage}
              alt="Contact us image"
              height={400}
              width={600}
              placeholder="blur"
              className="imgContain"
            />
            <Breadcrumbs name="Contact us" />
          </Col>
          <Col>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
              
                <input
                  type="text"
                  id="name"
                  name="firstname"
                  className="formItem"
                  placeholder="Your name please.."
                  height="2"
                  required
                />
               

               
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Contact number"
                  className="formItem halfWidth"
                  required
                />

              
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="formItem halfWidth"
                  placeholder="Email Id.."
                  required
                />

             
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="formItem"
                  placeholder="Attach Your file"
                  required
                />

                
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Please drop in your questions.."
                  required
                ></textarea>

                <input type="submit" value="Submit" />
              </form>
            </div>
          </Col>
        </Row>
        <div>
          <div className="zeropadding" md={6} sm={12}>
            <h4>Email Id:</h4> <span>devgrovestechnologies@gmail.com</span>
            <br />
            <br />
            <h4>Contact Us:</h4> +91-96292-30494
            <br />
            <br />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
