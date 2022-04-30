import React from "react";
import styles from "../styles/Home.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer} style={{ margin: 20 }}>
        Powered by <span> DevGroves </span>
      </footer>
    </>
  );
}
