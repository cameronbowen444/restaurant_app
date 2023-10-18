import React, {useState} from 'react'

import {useSelector} from 'react-redux';
import { selectTotalAmount, selectCheckoutTotalAmount } from '../store/cartSlice';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

import '../styles/checkout.css';
const Checkout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const shippingInfo = [];
    const cartTotal = useSelector(selectTotalAmount);
    const shippingCost = 5.00;
    const totalCheckoutAmount = useSelector(selectCheckoutTotalAmount);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name,
            email,
            number,
            country,
            city,
            postalCode
        }
        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo);
    }
    return (
        <>
            <Helmet title="Checkout">
                <CommonSection title="Checkout"/>
                <section className='mx-auto'>
                    <Container>
                        <Row>
                            <Col lg='6' md='6'>
                                <h6 className='mb-4'>Shipping Address</h6>
                                <form className="checkout__form" onSubmit={handleSubmit}>
                                    <div className="form__group">
                                        <input 
                                            type="text" 
                                            placeholder='Enter your name' 
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input 
                                            type="email" 
                                            placeholder='Enter your email' 
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input 
                                            type="number" 
                                            placeholder='Phone number' 
                                            onChange={(e) => setNumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input 
                                            type="text" 
                                            placeholder='Country' 
                                            onChange={(e) => setCountry(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input 
                                            type="text" 
                                            placeholder='City'
                                            onChange={(e) => setCity(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input 
                                            type="number" 
                                            placeholder='Postal code' 
                                            onChange={(e) => setPostalCode(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className='addTOCart__btn'>Payment</button>
                                </form>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='checkout__bill'>
                                    <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>{cartTotal}</span></h6>
                                    <h6 className='d-flex align-items-center justify-content-between mb-3'>Delivery Fee: <span>${shippingCost}</span></h6>
                                    <div className='checkout__total'>
                                        <h5 className='d-flex align-items-center justify-content-between'>Total: <span>{totalCheckoutAmount}</span></h5>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default Checkout