import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const containerStyle: React.CSSProperties = {
  background: "#0BA55D",
  height: "100vh",
}

const titleStyle: React.CSSProperties = {
  fontSize: "3em",
  fontWeight: "bold",
  color: "white",
}

interface MatchsicGreenBoxProps {
  children: React.ReactNode
}

export const MatchsicGreenBox = (props: MatchsicGreenBoxProps) => {
  return (
    <Container style={containerStyle} fluid>

      <Row className="pt-5"></Row> { /*Offset*/}


      <Row>
        <Col className="text-center">
          <h1 style={titleStyle}>Matchsic</h1>
        </Col>
      </Row>

      {props.children}

    </Container>
  )
}
