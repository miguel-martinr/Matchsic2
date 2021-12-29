import { createControlComponent } from "@react-leaflet/core";
import L, { Control, DomUtil } from "leaflet";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TileLayer } from "react-leaflet";
import { useAppSelector } from "../../store/hooks";
import classes from './LocateControl.module.css';

const MatchsicLocateControl = Control.extend({
  onAdd: function (map: L.Map) {
    const container = DomUtil.create('div');
    container.style.backgroundColor = '#fff';
    container.style.width = '3rem';
    container.style.height = '3rem';
    container.style.borderRadius = '50%';
    container.style.display = 'flex';
    container.style.marginBottom = '1rem';
    container.onclick = () => {
      console.log('Centering');
      const userCurrentPosition = useAppSelector(state => state.matchsic.userSession.location.coordinates);
      map.setView({ lat: userCurrentPosition.latitude, lng: userCurrentPosition.longitude }, 15);
    };



    const img = DomUtil.create('img');
    img.src = "./assets/locate-logo.png";




    container.appendChild(img);
    return container;
  },

  onRemove: function (map: L.Map) { },

});

interface LocateControlProps {
  map: L.Map | null,
}

export const LocateControl = (props: LocateControlProps) => {

  const currentLocation = useAppSelector(state => state.matchsic.userSession.location.coordinates);
  
  const clickHandler = () => {
    if (!props.map) return;
    props.map.setView({ lat: currentLocation.latitude, lng: currentLocation.longitude }, 15);
  }

  return (
    <div className='leaflet-bottom leaflet-right' onClick={clickHandler}>
      <div className={'leaflet-control ' + classes.controlContainer}>
        <img
          className={classes.controlLogo}
          src='/assets/locate-logo.png' />
      </div>
    </div>
  )
};

