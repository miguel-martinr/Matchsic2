import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


interface LoginPageProps {
  setUserToken: (token: string) => void,
}

const containerStyle: React.CSSProperties = {
  background: "#0BA55D",
  height: "100vh",
}

const titleStyle: React.CSSProperties = {
  fontSize: "3em",
  fontWeight: "bold",
  color: "white",
}


export const LoginPage = (props: LoginPageProps) => {
  return (
    <Container style={containerStyle} fluid>

      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5"></Row> { /*Offset*/}

      <Row>
        <Col className="text-center">
          <h1 style={titleStyle}>Matchsic</h1>
        </Col>
      </Row>

      

    </Container>
  )
}
