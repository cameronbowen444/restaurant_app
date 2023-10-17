import React, { useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../routes/Routers';
import { useLocation } from 'react-router-dom';
import Carts from '../UI/cart/Carts';
import { useSelector } from 'react-redux';
import { selectCartIcon } from '../../store/cartUiSlice';

// takes you to the top of the page when going to new page
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0)
    }, [pathname])

    return null;
}

const Layout = () => {
    const showCart = useSelector(selectCartIcon);
    return (
        <div>
            <Header/>
            <ScrollToTop />

            { showCart && <Carts /> }

            <div>
                <Routes/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;