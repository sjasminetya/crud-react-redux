import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
} from 'reactstrap'
import {useSelector} from 'react-redux'

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const title = useSelector(state => state.user.title)

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand>{title}</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Admin</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;