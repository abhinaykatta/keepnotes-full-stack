import React, { useEffect } from 'react'
import { Container, Button, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const navigator = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigator("/mynotes");
        }
    }, [userInfo, navigator]);
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className='title'>Keep Notes!</h1>
                            <p className='subtitle'>One place for all your notes!</p>
                        </div>
                        <div className='button-container'>
                            <a href="/Login">
                                <Button size='lg' className='landing-button'>Login</Button>
                            </a>
                            <a href="/Register">
                                <Button size='lg' className='landing-button' variant='outline-primary'>Sign Up</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;
