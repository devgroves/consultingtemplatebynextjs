import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Header() {
  return (
    <div>
      <Container
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/3d/08/e0/3d08e03cb40252526fee2036a67f07f1.gif")`,
          height: 400,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="center"
        id="header"
      >
        <h1 style={{ color: "white" }}>DevGroves</h1>
      </Container>
    </div>
  );
}
