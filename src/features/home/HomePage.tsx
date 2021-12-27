import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import classes from './HomePage.module.css';
import { MatchsicTile } from './MatchsicTile';

export const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className={"text-center " + classes.gray_background}>
          <MapContainer  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={classes.map} >
            
            <MatchsicTile />

            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Col>
      </Row>
    </Container>
  )
}
