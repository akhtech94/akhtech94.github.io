import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Restaurants</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" to='/'>Home</Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
