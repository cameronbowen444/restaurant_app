import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/logo.png'

import '../../styles/footer.css'; 

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Container>
                    <Row>
                        <Col lg="3" md='4' sm='6'>
                            <div className='footer__logo text-start'>
                                <img src={logo} alt="logo" />
                                <h5>Food City</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde blanditiis tempora dolorem accusantium totam modi.</p>
                            </div>
                        </Col>
                        <Col lg="3" md='4' sm='6'>
                            <h5 className='footer__title'>Delivery Time</h5>
                            <ListGroup className='deliver__time-list'>
                                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                    <span>Sunday - Thursday</span>
                                    <p>10:00am - 11:00am</p>
                                </ListGroupItem>
                                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                    <span>Friday - Saturday</span>
                                    <p>Off day</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg="3" md='4' sm='6'>
                        <h5 className='footer__title'>Contact</h5>
                            <ListGroup className='deliver__time-list'>
                                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                    <p>Location: Los Angeles, CA 91604</p>
                                </ListGroupItem>
                                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                    <span>Phone: 888-888-8888</span>
                                </ListGroupItem>
                                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                    <span>Email: example@gmail.com</span>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg="3" md='6' sm='6'>
                            <h5 className='footer__title'>Newsletter</h5>
                            <p>Subscribe to our newsletter</p>
                            <div className="newsletter">
                                <input name='email' type="email" placeholder='Enter your email' />
                                <span><i className="ri-send-plane-line"></i></span>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col lg='6' md='6'>
                            <p className="copyright__text">
                                Copyright - 2023, website made by Cameron Bowen. All Rights Reserved.
                            </p>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                                <p className='m-0'>Follow: </p>
                                <span> <Link to={'https://www.facebook.com'}><i className="ri-facebook-circle-fill"></i></Link> </span>
                                <span> <Link to={'https://www.facebook.com'}><i className="ri-github-fill"></i></Link> </span>
                                <span> <Link to={'https://www.facebook.com'}><i className="ri-youtube-line"></i></Link> </span>
                                <span> <Link to={'https://www.facebook.com'}><i className="ri-linkedin-box-fill"></i></Link> </span>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;