import React from 'react'
import "./header.css"
import { Row, Col } from 'react-bootstrap'
import { Navbar, Container, Nav, NavDropdown, Form, Button, } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="manu_bg">
      <Container >
        <Navbar.Brand href="https://mail.google.com/mail/u/1/#inbox?compose=new"><h4>abdullahalmamun201214@gmail.com </h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto ami"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#first">Services</Nav.Link>
            <Nav.Link href="#second">Works</Nav.Link>
            <Nav.Link href="#third">Portfolio</Nav.Link>
            <Nav.Link href="#fourth">Resume</Nav.Link>
            <Nav.Link href="#fiveth">Skills</Nav.Link>
            <Nav.Link href="#sixth">Pricing</Nav.Link>
            <Nav.Link href="#seventh">Contact</Nav.Link>
            
           
            
          </Nav>
          <div className="hi">
        <a href="#seventh"><button>Hire me!</button></a>
       </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
