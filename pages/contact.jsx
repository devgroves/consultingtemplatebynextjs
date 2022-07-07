import React ,{ useState }from "react";
import Image from "next/image";
import Head from "next/head";
import ContactUsImage from "./images/contactus.png";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Contact() {
  const [name ,setName]=useState('');
  const [email,setEmail]=useState('');
  const [number,setNumber]=useState();
  const [file,setFile]=useState();
  const [message,setMessage]=useState('');
  const [showSuccess, setShowSuccess]=useState(false);

   const handleSubmit =async (event) => {
    event.preventDefault();
    const data = {
      "name":name,
      "email":email,
      "number":number,
      "file":file,
      "message":message
    }
    const res = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setShowSuccess(true);
    setTimeout(()=> setShowSuccess(false), 2000);
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
        <Row className="center container-height zero-margin contactform-bg">
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
                <h5>Please fill in the form, we will get back to you ... </h5>
                <Row>
                  <Col>
                    <input
                      type="text"
                      id="name"
                      name="firstname"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Your name please.."
                      height="1"
                      required
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} sm={12}>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      placeholder="Contact number"
                      required
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                    />
                  </Col>
                  <Col md={6} sm={12}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Id.."
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Row className="formItem">
                  <Col>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Attach Your file"
                      onChange={(e) => {
                        setFile(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Please drop in your questions.."
                      required
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input type="submit" value="Submit" />
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
          <p className="aligncenter">{ showSuccess? "We noted the details, thanks for your time!": "" }</p>
        </Row>

        <div className="contact-col-details">
          <div className="center">
            <div md={6} sm={12} className="contact-col">
              <h4>
                Write to us: <a href="mailto:devgrovestechnologies@gmail.com">devgrovestechnologies@gmail.com</a> {' '}
                or Call us @ <a href="tel:+919629230494">+91-96292-30494</a>
              </h4>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
