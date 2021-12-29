import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useAppSelector } from '../store/hooks';
import classes from './HomePage.module.css';
import { LocateControl } from './MapControls/LocateControl';
import { MatchsicTile } from './MatchsicTile';
import { UserMarker } from './UserMarker';

export const HomePage = () => {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  const { userSession } = useAppSelector(state => state.matchsic);
  const [map, setMap] = useState<L.Map | null>(null);
  return (
    <Container fluid>
      <Row>
        <Col className={"text-center " + classes.gray_background}>
          <MapContainer
            center={[28.47762873997604, -16.312475617040874]}
            zoom={13}
            scrollWheelZoom={true}
            className={classes.map}
            whenCreated={(map) => setMap(map)}
          >
            <MatchsicTile />

            <UserMarker
              user={userSession} //temp
            />

            <LocateControl map={map}></LocateControl>
          </MapContainer>
        </Col>
      </Row>
    </Container>
  )
}
