import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchInput from '../SearchInput'

function TopNavBar() {
    return (
        <Navbar>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" className="global-nav__logo">
                    <title>
                        LinkedIn
                    </title>

                    <g>
                        <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                    </g>
                </svg>
            </div>
            <SearchInput></SearchInput>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">My network</Nav.Link>
                    <Nav.Link href="#home">Jobs</Nav.Link>
                    <Nav.Link href="#link">Messaging</Nav.Link>
                    <Nav.Link href="#home">Notifications</Nav.Link>
                    <Nav.Link href="#link">Work</Nav.Link>
                    <Nav.Link href="#link">Try Premium Free for 1 Month</Nav.Link>
                    <NavDropdown title="Me" id="basic-nav-dropdown">
                        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default TopNavBar
