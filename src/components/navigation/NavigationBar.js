import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {GrTwitter} from 'react-icons/gr';

import './styles.css'
const NavigationBar = () => {
    return (
        <Navbar variant="dark" className='nav navbg' collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand className='title' href="#home">YakuzaStreetGang</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav >
                        <Nav.Link className='navnav' href="#home">Mint</Nav.Link>
                        <Nav.Link className='navnav' href="#Features">Features</Nav.Link>
                        <Nav.Link className='navnav' href="https://twitter.com/YakuzaStreetNFT" target="_blank"><GrTwitter /></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
