import React from "react"
import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"


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


export const BottomBar = () => {
  return (
    <Navbar className="fixed-bottom" style={barStyle}>
      <Container>
        <Link to="/home"><Navbar.Brand ><img style={imageStyle} src="./src/Home.svg"></img></Navbar.Brand></Link>
        <Link to="/notifications"><Navbar.Brand ><img style={imageStyle} src="./src/notificacion.svg"></img></Navbar.Brand></Link>
        <Link to="/profile"><Navbar.Brand ><img style={imageStyle} src="./src/Perfil.svg"></img></Navbar.Brand></Link>
      </Container>
    </Navbar>
  )
}