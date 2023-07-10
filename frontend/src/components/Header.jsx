import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

// className = "bg-body-tertiary"
function Header() {
    return (
        <Navbar expand="lg" bg="primary" className='header'>
            <Container fluid>
                <Navbar.Brand href="/" className='head'>Keep Notes</Navbar.Brand>
                <Nav className='ms-auto'>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link href="#action1">Notes</Nav.Link>
                            <NavDropdown title="Abhinay" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
