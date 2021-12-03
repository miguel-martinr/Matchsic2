import React from "react"
import { Container, Navbar } from "react-bootstrap"
import classes from "./greenCircle.css"


const barStyle = {
  background: '#FFFF',
  bottom: 0,
  right: 0,
  left: 0,
}


const imageStyle = {
  background: '#5cb85c',
  borderRadius: 50,
  flex: 1,
  width: 50,
  height: 50,
  resizeMode: 'contain',
}


export const BottonBar = () => {
  return (
    <Navbar className="fixed-bottom" style={barStyle}>
      <Container>
        <Navbar.Brand href="http://localhost:3000/"><img style={imageStyle} src="../Home.svg"></img></Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/"><img style={imageStyle} src="../notificacion.svg"></img></Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/Profile"><img style={imageStyle} src="https://svgsilh.com/svg/1633250.svg"></img></Navbar.Brand>
      </Container>
    </Navbar>
  )
}