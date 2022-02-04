import React, { useState } from 'react';
import { Row, Col, InputGroup ,Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { MatchsicButton } from '../utils/MatchsicButton'
import { MatchsicGreenBox } from '../utils/MatchsicGreenBox'
import { userService } from '../_services';
import { useFormFields } from '../../utilities/form-hooks';


const registerButtonStyle = {
  color: '#0BA55D',
  borderRadius: '100px',
  border: 'none',
  width: '8em',
  height: '3em',
  fontWeight: 'bold',
}

export const RegisterPage = () => {

  const navigate = useNavigate();
  
  const [fields, setFields] = useFormFields({
    username: '',
    password: '',
    name: '',
    secondName: '',
    email: '',
    birthDate: '',
  });


 

  const handleFieldChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFields(ev);
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log(fields);
    userService.register(fields).then(() => {
      navigate("/login")
    }).catch((err) => {
      console.log(err)
    })

  }


  return (
    <MatchsicGreenBox>
      <Row className="pt-5"></Row> { /*Offset*/}

      <Row className="ps-3 pe-3">
        <Col className="text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="name">
              <InputGroup hasValidation id="nameInputGroup">
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="secondName">
              <InputGroup hasValidation id="secondNameInputGroup">
                <Form.Control
                  type="text"
                  placeholder="Apellidos"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="birthDate">
              <InputGroup hasValidation id="secondNameInputGroup">
                <Form.Control
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="username">
              <InputGroup hasValidation id="usernameInputGroup">
                <Form.Control
                  type="text"
                  placeholder="Nombre de usuario"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="email">
              <InputGroup hasValidation id="emailInputGroup">
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="password">
              <InputGroup hasValidation id="passwordInputGroup">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="checkPassword">
              <InputGroup hasValidation id="CheckpasswordInputGroup">
                <Form.Control
                  type="password"
                  placeholder="Confirmar contraseña"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </Form.Group>
            <MatchsicButton text="Registrarme" style={registerButtonStyle} type="submit"></MatchsicButton>
            
          </Form>
        </Col>
      </Row>
    </MatchsicGreenBox>
  )
}
