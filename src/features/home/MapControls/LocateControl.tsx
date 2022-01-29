import L, { Control, DomUtil } from "leaflet";
import React from "react";
import { useAppSelector } from "../../store/hooks";
import classes from './LocateControl.module.css';
import locateLogo from "./locate-logo.png";

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
          src={locateLogo} />
      </div>
    </div>
  )
};

