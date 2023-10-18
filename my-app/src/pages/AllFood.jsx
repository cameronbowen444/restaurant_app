import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection';

import { Container, Row, Col } from 'reactstrap';

import products from '../assets/fake-data/products';
import ProductCart from '../components/UI/product-card/ProductCard'
import ReactPaginate from 'react-paginate';

import '../styles/all-foods.css';
import '../styles/pagination.css';

const AllFood = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProducts = products.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return item;
        } else {
            return console.log("not found");
        }
    })

    const productPerPage = 8;

    const visitedPage = pageNumber * productPerPage;

    const displayPage = searchedProducts.slice(visitedPage, visitedPage + productPerPage);

    const pageCount = Math.ceil(searchedProducts.length / productPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <>
            <Helmet title='Full Menu'>
                <CommonSection title="Full Menu" />

                <section>
                    <Container>
                        <Row>
                            <Col lg='6' md='6' sm='12' xs='12'>
                                <div className="search__widget d-flex align-items-center justify-content-between ">
                                    <input 
                                        type="text" 
                                        placeholder="I'm looking for..." 
                                        value={searchTerm} 
                                        onChange={(e) => setSearchTerm(e.target.value)} 
                                    />
                                    <span><i className="ri-search-line"></i></span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {
                                displayPage
                                    .map((item) => (
                                        <Col lg='3' md='4' sm='5' xs='9' index={item.id} className='mb-4 product__list' key={item.id}> 
                                            <ProductCart item={item} />
                                        </Col>
                                    ))
                            }

                            <div>
                                <ReactPaginate 
                                    pageCount={pageCount} 
                                    onPageChange={changePage}
                                    previousLabel='Prev'
                                    nextLabel='Next'
                                    containerClassName='paginationBtns'
                                    />
                            </div>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default AllFood