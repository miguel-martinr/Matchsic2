import React, { useEffect, useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MatchsicButton } from '../utils/MatchsicButton';
import { MatchsicGreenBox } from '../utils/MatchsicGreenBox';
import { useFormFields } from '../../utilities/form-hooks';

import classes from './LoginPage.module.css';
import { userService } from '../_services';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loggedIn, userDataFetched } from '../store/storeSlice';

const loginButtonStyle = {
  color: '#0BA55D',
  borderRadius: '100px',
  border: 'none',
  width: '8em',
  height: '3em',
  fontWeight: 'bold',
}

interface LoginPageProps {
}


export const LoginPage = (props: LoginPageProps) => {

  const [validated, setValidated] = useState(false);
  const [invalidFeedback, setInvalidFeedBack] = useState({
    message: 'Completa este campo',
    fromServer: false,
  });
  
  const navigate = useNavigate();
  const [fields, setFields] = useFormFields({
    username: '',
    password: '',
  });

  useEffect(() => {
    userService.amILoggedIn().then((userData) => {
      dispatch(loggedIn());
      dispatch(userDataFetched(userData));
    }).catch(() => {

    });
  }, []);

  const handleFieldChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidFeedBack({...invalidFeedback, fromServer: false});
    setValidated(false);
    setFields(ev);
  }

  const dispatch = useAppDispatch();
  
  const handleSubmit = (ev: React.FormEvent) => {
    
    const form = ev.target as HTMLFormElement;
    ev.preventDefault();

    setValidated(true);
    if (!form.checkValidity()) {
      
      return;
    }

    const {username, password} = fields;

    // Send login request to server
    userService.login(username, password)
      .then(() => {
        userService.getData().then((res) => {
          console.log(res.data)
          dispatch(loggedIn());
          dispatch(userDataFetched(res.data));
          navigate('/home');
        }).catch((res) => {
          console.log(res)
        });
      })
      .catch(err => {
        // if login unsuccessful, show error message
        setInvalidFeedBack({message: err, fromServer: true});
      });
  }

  const getMainInvalidFeedBack = () => {
    if (validated && !fields.username) return 'Completa este campo';
    if (invalidFeedback.fromServer && fields.usernamme) return '';
    if (validated && invalidFeedback.fromServer) return invalidFeedback.message;
  }

  return (
    <MatchsicGreenBox>
      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5"></Row> { /*Offset*/}
      <Row className="pt-5 ps-3 pe-3">
        <Col className="text-center">
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-5" controlId="username">
              <InputGroup hasValidation id="usernameInputGroup">
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre de usuario"
                  isInvalid={validated && (!fields.username || invalidFeedback.fromServer)}
                  onChange={handleFieldChange}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={classes.invalidFeedback}
                >
                  {getMainInvalidFeedBack()}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5" controlId="password">
              <InputGroup hasValidation id="passwordInputGroup">
                <Form.Control
                  required
                  type="password"
                  placeholder="Contraseña"
                  isInvalid={validated && !fields.password}
                  onChange={handleFieldChange}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={classes.invalidFeedback}
                >
                  Completa este campo
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <MatchsicButton text="Entrar" id="loginButton" style={loginButtonStyle} type="submit"></MatchsicButton>
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
