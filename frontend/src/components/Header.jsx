import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Actions/userActions';


function Header() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const handleLogout = () => {
        dispatch(logout());
        navigate('/', { replace: true });
    };
    return (
        <Navbar expand="lg" bg="primary" className='header'>
            <Container fluid>
                <Navbar.Brand className='head'> <Link to="/">  Keep Notes
                </Link></Navbar.Brand>
                <Nav className='ms-auto'>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        {userInfo && <Nav> <Nav.Link>
                            <Link to="/mynotes">
                                My Notes
                            </Link></Nav.Link>
                            <NavDropdown title={userInfo.name} id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    onClick={handleLogout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown></Nav>}
                        {
                            !userInfo && <Nav.Link>
                                <Link to="/login">
                                    <b>Login</b>
                                </Link></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default Header
