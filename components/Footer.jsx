import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
export default function Footer() {
  return (
    <>
      <Container>
        <hr></hr>
        <footer className={styles.footer}>Copyright @2022 DevGroves Technologies.</footer>
      </Container>
    </>
  );
}
