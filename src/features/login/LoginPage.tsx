import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { MatchsicButton } from '../MatchsicButton';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MatchsicGreenBox } from '../MatchsicGreenBox';

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

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;

    const usernameInput = form.elements.namedItem("username") as HTMLInputElement;
    const passwordInput = form.elements.namedItem("password") as HTMLInputElement;

    if (!usernameInput || !passwordInput) {
      alert('Can\'t find username or password input');
      return;
    }

    const [username, password] = [usernameInput.value, passwordInput.value];
    // Send login request to server
    const token = `${username}'s token`;

    // if login successful, set user token in local storage
    props.setUserToken(token);
    return;

    // if login unsuccessful, show error message
  }

  return (
    <MatchsicGreenBox>
      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5 ps-3 pe-3">
        <Col className="text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="username">
              <Form.Control type="text" placeholder="Nombre de usuario" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="password">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <MatchsicButton text="Entrar" ></MatchsicButton>
          </Form>
        </Col>
      </Row>
    </MatchsicGreenBox>
  )
}
