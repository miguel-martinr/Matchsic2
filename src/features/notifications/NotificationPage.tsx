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
      <NotificationCard
        sender={{
          username: 'Lena_00',
          profileLink: 'sender/profile.com',
        }}
        payload='Hola, ¿Alguna playlist que me recomiendes?'
        id='notification0'
        key='notification0'
        onGoToMap={getNavigateToMap([28.556347, -16.336054])} />
    ]
  }

  return (
    <Container className={`${classes.mainFrame}`}> 
      <Row className='pt-5'></Row>
      <Row className='pt-5 ps-4'>
        <Col>
          {
            ...getNotifications()
          }
        </Col>
      </Row>
    </Container>
  );
}
