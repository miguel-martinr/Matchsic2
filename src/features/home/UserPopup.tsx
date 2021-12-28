import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Popup } from 'react-leaflet'
import { UserData } from '../../types/user'
import classes from './UserPopup.module.css'

interface UserPopupProps {
  user: UserData,
}


export const UserPopup = (props: UserPopupProps) => {
  const { username, music } = props.user;
  return (
    <Popup>
      <Container className={'p-0 ' + classes.popupContainer}>
        <Row>
          <Col className='p-0'><span className='h6'>{username}</span></Col>
        </Row>
        <Row>
          <Col className='p-0' xs={4}>
            <img className={classes.coverImage} src={music.coverImage.url} />
          </Col>
          <Col className='p-0' xs={8}>
            <Row>
              <Col><span>Escuchando:</span></Col>
            </Row>
            <Row>
              <Col>
                <span>
                  {music.trackName}, {music.authorsNames.join(', ')}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Popup>
  )
}
