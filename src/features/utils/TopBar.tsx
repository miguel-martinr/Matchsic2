import React, { useState } from "react"
import { Container, Navbar, Offcanvas } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../store/hooks"
import { loggedOut } from "../store/storeSlice"
import { userService } from "../_services"


const barStyle = {
  background: '#0BA55D',
}


const exitStyle = {
  color: '#FFFFFF'
}


export const TopBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    userService.logout()
      .then(() => {
        dispatch(loggedOut());
        navigate('/login');
      })
      .catch(() => {
        alert(`Something went wrong!`);
      });
  }

  return (
    <Navbar expand="lg" style={barStyle}>
      <Container>
        <a onClick={handleShow}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg"></img>
        </a>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Options of menu
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand style={exitStyle} onClick={logoutHandler}>Salir</Navbar.Brand>
      </Container>
    </Navbar>
  )
}