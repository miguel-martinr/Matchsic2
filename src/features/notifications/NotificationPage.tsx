import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router'
import { NotificationCard } from './NotificationCard'
import classes from './Notifications.module.css';

export const NotificationPage = () => {

  const navigate = useNavigate();

  const getNavigateToMap = (location: [number, number]) => {
    return (ev: React.MouseEvent<HTMLButtonElement>) => {
      navigate('/home');
      console.log(`Went to home and focused on ${location}`);
    };
  }

  const getNotifications = () => {
    return [
      {
        sender: {
          username: 'Lena_00',
          profileLink: 'sender/profile.com',
        },
        payload: 'Hola, ¿Alguna playlist que me recomiendes?',
        handleGoToMap: getNavigateToMap([28.556347, -16.336054]),
      },
      {
        sender: {
          username: 'Fire_21',
          profileLink: 'sender/profile.com',
        },
        payload: 'Hey, What\'s up?',
        handleGoToMap: getNavigateToMap([28.556347, -16.336054]),
      },
      {
        sender: {
          username: 'Fire_21',
          profileLink: 'sender/profile.com',
        },
        payload: 'Hey, What\'s up?',
        handleGoToMap: getNavigateToMap([28.556347, -16.336054]),
      },
      {
        sender: {
          username: 'Fire_21',
          profileLink: 'sender/profile.com',
        },
        payload: 'Hey, What\'s up?',
        handleGoToMap: getNavigateToMap([28.556347, -16.336054]),
      },
      {
        sender: {
          username: 'Fire_21',
          profileLink: 'sender/profile.com',
        },
        payload: 'Hey, What\'s up?',
        handleGoToMap: getNavigateToMap([28.556347, -16.336054]),
      },
      {
        sender: {
          username: 'Fire_21',
          profileLink: 'sender/profile.com',
        },
        payload: 'Hey, What\'s up?',
        handleGoToMap: getNavigateToMap([28.556347, -16.336054]),
      }
    ].map((n, i) => (
      <NotificationCard {...n} id={`notification${i}`}/>
    ));
      
      
  }

  return (
    <Container className={`${classes.mainFrame}`} fluid>
      <Row className='pt-5'></Row>
      <Row className='pt-5 ps-4'>
        <Col className="text-center col-sm-12 col-md-5 offset-sm-0 offset-md-1">
          {
            ...getNotifications().map(n => (
              <Row className="mb-3" key={n.props.id}>
                <Col>{n}</Col>
              </Row>
            ))
          }
        </Col>
      </Row>
    </Container>
  );
}
