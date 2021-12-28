import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Popup } from 'react-leaflet'
import { UserData } from '../../types/user'
import classes from './UserPopup.module.css'

interface UserPopupProps {
  user: UserData,
}

const getPopupWidth = (trackContent: string)=> {
  const width = Math.min(15, trackContent.length * 0.8).toFixed(2);
  return `${width}rem`;
}

export const UserPopup = (props: UserPopupProps) => {
  const { username, music } = props.user;

  const trackContent = `${music.trackName}, ${music.authorsNames.join(', ')}`;
  const popupWidth = getPopupWidth(trackContent);
  return (
    <Popup>
      <Container className={'p-0 ' + classes.popupContainer} style={{width: popupWidth}}>
        <Row>
          <Col className='mb-2'><span className={'h6 ' + classes.username}>{username}</span></Col>
        </Row>
        <Row>
          <Col className='p-0' xs={3}>
            <img className={classes.coverImage} src={music.coverImage.url} />
          </Col>
          <Col className='p-0' xs={9}>
            <Row>
              <Col><span className={classes.listeningTag}>Escuchando:</span></Col>
            </Row>
            <Row>
              <Col>
                <span className={classes.trackContent}>
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
