import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import image from '../assets/cover1.png';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <header className='header'>
      <Navbar className='header'>
        <Container className='header'>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={image}
              width="90"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { isAuthenticated ? <Button onClick={() => logout()} variant="contained">Logout</Button>: "" }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
}