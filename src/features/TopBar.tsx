import Button from "@restart/ui/esm/Button"
import React, { useState } from "react"
import { Container, Navbar, Offcanvas } from "react-bootstrap"


const barStyle = {
  background: '#0BA55D'
}


export const TopBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" style={barStyle}>
      <Container>
        <Button onClick={handleShow}>
          Menu
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Options of menu
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand>Salir</Navbar.Brand>
      </Container>
    </Navbar>
  )
}