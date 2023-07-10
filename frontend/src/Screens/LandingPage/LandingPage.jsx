import React from 'react'
import { Container, Button, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
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
                            <a href="/login">
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

export default LandingPage