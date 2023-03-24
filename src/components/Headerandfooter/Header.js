import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../assets/cover.png';
import profile from '../assets/profile.png';
import Button from '@mui/material/Button';

export default function Header() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <header className='header'  >
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="/">
            <Image  src={logo} width="90" height="30" className="d-inline-block align-top" alt="Logo" />
            <span className="ms-2">Blogify</span>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav style={{ marginLeft: '300px' }}>
                 <Nav.Link href="/">Home</Nav.Link>
                 <Nav.Link href="/profile">Profile</Nav.Link>
                 <Nav.Link href="/about">About US</Nav.Link>
                </Nav>

          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            { isAuthenticated ? <span className="me-3">Abdullah Abu Hamad</span> : "" }
            { isAuthenticated ? <Image src={profile} width="30" height="30" roundedCircle className="mx-3" alt="Profile" /> : "" }
            { isAuthenticated ? <Button onClick={() => logout()} variant="outline-light">Logout</Button> : "" }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
