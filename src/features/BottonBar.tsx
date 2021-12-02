import React from "react"
import { Container, Navbar } from "react-bootstrap"


const barStyle = {
  background: '#0BA55D',
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0
}


export const BottonBar = () => {
  return (
    <Navbar style={barStyle}>
      <Container>
        <Navbar.Brand href="http://localhost:3000/">Home</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/">Notificaciones</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/">Perfil</Navbar.Brand>
      </Container>
    </Navbar>
  )
}