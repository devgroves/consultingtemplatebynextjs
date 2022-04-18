/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Details from "./Details";
import Header from "./Header";
import NavLink from "./NavLink";
import Services from "./Services";

export default function DevGroves() {
  return (
    <>
      <Head>
        <title>DevGroves</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/fontawesome-all.min.css" rel="stylesheet" />
        <link href="css/swiper.css" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
      </Head>
      <div>
        <NavLink />
        <Header />
        <Details />
        <Services />
        <About />
        <Contact />
      </div>
    </>
  );
}
