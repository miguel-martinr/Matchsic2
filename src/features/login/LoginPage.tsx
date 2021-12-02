import React, { useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MatchsicButton } from '../MatchsicButton';
import { MatchsicGreenBox } from '../MatchsicGreenBox';
import { useFormFields } from '../../utilities/form-hooks';

import classes from './LoginPage.module.css';
interface LoginPageProps {
  setUserToken: (token: string) => void,
}


export const LoginPage = (props: LoginPageProps) => {

  const [validated, setValidated] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    username: '',
    password: '',
  });

  const handleSubmit = (ev: React.FormEvent) => {

    const form = ev.target as HTMLFormElement;

    setValidated(true);
    if (!form.checkValidity()) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }

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
    // props.setUserToken(token);
    return;

    // if login unsuccessful, show error message
  }



  return (
    <MatchsicGreenBox>
      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5 ps-3 pe-3">
        <Col className="text-center">
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-5" controlId="username">
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre de usuario"
                  isInvalid={validated && !fields.username}
                  onChange={handleFieldChange}
                />
                <Form.Control.Feedback type="invalid">
                  Completa este campo
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="password">
              <Form.Control
                required
                type="password"
                placeholder="Contraseña"
                isInvalid={validated && !fields.password}
                onChange={handleFieldChange}
              />
              <Form.Control.Feedback type="invalid">
                Completa este campo
              </Form.Control.Feedback>
            </Form.Group>
            <MatchsicButton text="Entrar" ></MatchsicButton>
          </Form>
        </Col>
      </Row>


      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5">
        <Col className="text-center">
          <Link to="/register" className={classes.registerLink}>Registrarme</Link>
        </Col>
      </Row>
    </MatchsicGreenBox>
  )
}
