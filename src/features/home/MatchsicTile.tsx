import React from 'react'
import { TileLayer } from 'react-leaflet'

export const MatchsicTile = () => {

  const options = {
    accessToken: 'pk.eyJ1IjoibW9yZG9yMTExMCIsImEiOiJja3QwNDVpaDkyc3MzMnBwbng5Zm9razA4In0.DsMnEHEZiiPkEeyfjATGwA',
    url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: 'mapbox/streets-v11',
    maxZoom: 20,
    tileSize: 512,
    zoomOffset: -1,
  }

  const {accessToken, url, attribution, id, maxZoom, tileSize, zoomOffset} = options;
  return (
    <TileLayer
      accessToken={accessToken}
      url={url}
      id={id}
      maxZoom={maxZoom}
      tileSize={tileSize}
      zoomOffset={zoomOffset}
    />
  )
}
