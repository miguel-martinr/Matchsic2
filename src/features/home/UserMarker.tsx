import L from 'leaflet';
import React from 'react'
import { Marker, MarkerProps, Popup } from 'react-leaflet'
import { UserData } from '../../types/user'
import classes from './UserMarker.module.css';
import { UserPopup } from './UserPopup';

interface UserMarkerProps {
  user: UserData
}


export const UserMarker = (props: UserMarkerProps) => {
  const { location, music } = props.user;

  const icon = L.icon({
    iconUrl: music.coverImage.url,
    iconSize: [55, 55],
    iconAnchor: [27, 27],
    className: classes.userIcon,
  });

  const position: [number, number] = [location.coordinates.latitude, location.coordinates.longitude];
  return (
    <Marker
      icon={icon}
      position={position}
    >
      <UserPopup
        user={props.user}
      />
    
    </Marker>
  )
}
