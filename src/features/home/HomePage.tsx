import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useAppSelector } from '../store/hooks';
import classes from './HomePage.module.css';
import { MatchsicTile } from './MatchsicTile';
import { UserMarker } from './UserMarker';

export const HomePage = () => {

  const {userSession} = useAppSelector(state => state.matchsic);
  return (
    <Container fluid>
      <Row>
        <Col className={"text-center " + classes.gray_background}>
          <MapContainer  center={[28.47762873997604, -16.312475617040874]} zoom={13} scrollWheelZoom={true} className={classes.map} >
            
            <MatchsicTile />
            
            <UserMarker 
              user={userSession} //temp
            />
            
          </MapContainer>
        </Col>
      </Row>
    </Container>
  )
}
