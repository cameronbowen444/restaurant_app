import React, {useState, useEffect} from 'react'

import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col } from 'reactstrap';
import { HashLink } from 'react-router-hash-link';

import '../styles/hero-section.css';
import '../styles/home.css';

import { Link } from 'react-router-dom';

import featureImg1 from '../assets/images/service-01.png'
import featureImg2 from '../assets/images/service-02.png'
import featureImg3 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products.js'

import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import ProductCard from '../components/UI/product-card/ProductCard.jsx';


import networkImg from '../assets/images/network.jpg'

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';

const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?"
    },
    {
        title: 'Dine In',
        imgUrl: featureImg2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?"
    },
    {
        title: 'Easy Pick Up',
        imgUrl: featureImg3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?"
    },
]

const Home = () => {

    const [category, setCategory] = useState('ALL');
    const [allProducts, setAllProducts] = useState(products);

    useEffect(() => {
        if (category === 'ALL') {
            setAllProducts(products)
        }

        if (category === 'BURGERS') {
            const filteredProducts = products.filter(item => item.category === 'Burger')
            setAllProducts(filteredProducts);
        }

        if (category === 'PIZZA') {
            const filteredProducts = products.filter(item => item.category === 'Pizza')
            setAllProducts(filteredProducts);
        }

        if (category === 'BREAD') {
            const filteredProducts = products.filter(item => item.category === 'Bread')
            setAllProducts(filteredProducts);
        }

    }, [category])

    return (
        <>
            <Helmet title="Home" >
                <section className="landing" >
                    <Container className='overlay'>
                        <Row>
                            <Col lg='6' md='6'>
                                <div className="hero__content">
                                    <h5 className='mb-3'>Great Food and Great Fun</h5>
                                    <h1 className='mb-4 hero__title'><span>Food City</span><br />delivers food to <br /> your <span> doorstep</span></h1>
                                    <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                                        <HashLink to={'/#order'} className='order__btn d-flex align-items-center justify-content-between'>
                                            Order Now <i className="ri-arrow-right-s-line"></i>
                                        </HashLink> 
                                        <button className='all__foods-btn'>
                                            <Link to={'/foods'}>See Full Menu</Link>
                                        </button> 
                                    </div>
                                    <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                                        <p className='d-flex align-items-center gap-2'>
                                            <span className='shipping__icon'>
                                                <i className="ri-car-line"></i>
                                            </span> 
                                            No delivery fee
                                        </p>
                                        <p className='d-flex align-items-center gap-2'>
                                            <span className='shipping__icon'>
                                                <i className="ri-shield-check-line"></i>
                                            </span> 
                                            100% secure checkout
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className='text-left'>
                                <h4 className='feature__subtitle mb-4'>What we serve</h4>
                                <h2 className='feature__title'>Just sit back and relax</h2>
                                <h2 className='feature__title'>while we <span>take care</span></h2>
                                <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, ex.</p>
                                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat!.</p>
                            </Col>
                            {
                                featureData.map((item, index) => (
                                    <Col lg='4' md='4' sm='6'  key={index} className='mt-5'>
                                        <div className="feature__item text-center px-2 py-3">
                                            <img src={item.imgUrl} alt="feature-img" className='w-50 mb-3' />
                                            <h4 className='fw-bold mb-3'>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </Col>
                                ))
                            }

                        </Row>
                    </Container>
                </section>


                <section id='order'>
                    <Container>
                        <Row>
                            <Col lg='12' className='text-left'>
                                <h2>Popular Foods</h2>
                            </Col>

                            <Col lg='12'>
                                <div className="food__category d-flex align-items-center justify-content-around">
                                    <button 
                                        className={`all__btn ${category === 'ALL' ? "foodBtnActive" : ""}`} 
                                        onClick={() => setCategory('ALL')}
                                    >
                                        All
                                    </button>
                                    <button 
                                        className={`d-flex align-items-center gap-1 ${category === 'BURGERS' ? "foodBtnActive" : ""}`}
                                        onClick={() => setCategory('BURGERS')}
                                    >
                                        <img src={foodCategoryImg01} alt="hamburger" />
                                        Burgers
                                    </button>

                                    <button 
                                        className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? "foodBtnActive" : ""}`}
                                        onClick={() => setCategory('PIZZA')}
                                    >
                                        <img src={foodCategoryImg02} alt="pizza" />
                                        Pizza
                                    </button>

                                    <button 
                                        className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? "foodBtnActive" : ""}`}
                                        onClick={() => setCategory('BREAD')}
                                    >
                                        <img src={foodCategoryImg03} alt="bread" />
                                        Bread
                                    </button>

                                </div>
                            </Col>
                            {
                                allProducts.map((item) => (
                                    <Col lg='3' md='4' sm='6' xs='9' key={item.id} className='mt-5 product__list'>
                                        <ProductCard item={item} />
                                    </Col>
                                ))
                            }

                        </Row>
                    </Container>
                </section>


                <section className='px-5'>
                    <Container>
                        <Row>
                            <Col lg='6' md='6'>
                                <div className="testimonial">
                                    <h3 className='testimonial__subtitle mb-4'>Testimonials</h3>
                                    <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
                                    <p className='testimonial__desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur aut id ipsa error quo ipsam esse quis incidunt dignissimos earum.</p>
                                    <hr className='hr' />
                                    <TestimonialSlider/>
                                </div>
                            </Col>
                            <Col lg='6' md='6' className='network__img'>
                                <img src={networkImg} alt="testimonial-img" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default Home;