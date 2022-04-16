import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive=nabar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' />
                    <Nav>
                        <Nav.Link href="/" className="item">Projects</Nav.Link>
                        <Nav.Link href="/articles" className="item">Articles</Nav.Link>
                        <Nav.Link href="/about" className="item">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
  }
   
  export default Navigation;