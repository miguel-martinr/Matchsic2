import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router'
import { NotificationCard } from './NotificationCard'

export const NotificationPage = () => {

  const navigate = useNavigate();

  const getNavigateToMap = (location: [number, number]) => {
    return (ev: React.MouseEventHandler<HTMLButtonElement>) => {
      navigate('/home');
      console.log(`Went to home and focused on ${location}`);
    };
  }

  const getNotifications = () => {
    return [
      <NotificationCard id='notification0' key='notification0' onGoToMap={(ev) => getNavigateToMap([28.556347, -16.336054])} />
    ]
  }

  return (
    <Fragment>
      <Row className='pt-5'></Row>
      <Row className='pt-5 ps-4'>
        <Col>
          {
            ...getNotifications()
          }
        </Col>
      </Row>
    </Fragment>
  );
}
