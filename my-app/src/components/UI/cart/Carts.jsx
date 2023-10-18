import React from 'react';
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import '../../../styles/shopping-cart.css';

import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../store/cartUiSlice';
import { selectProducts, selectTotalAmount } from '../../../store/cartSlice';

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectProducts)
    const totalAmounts = useSelector(selectTotalAmount)

    const toggleCart = () => {
        dispatch(toggle());
    }
    return (
        <div className='cart__container'>
            <ListGroup className='cart'>

                <div className="cart__close">
                    <span>My Cart</span>
                    <span onClick={toggleCart}>
                        <i className='ri-close-fill'></i>
                    </span>
                </div>
                <div className="cart__item-list">
                    {
                        cartProducts.length === 0 ? <h6 className='text-center mt-5'>No items in cart</h6> : cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
                <div className='cart__bottom'>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6>Subtotal amount:</h6>
                        <span>{totalAmounts}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <button onClick={toggleCart}>Continue Shopping</button>
                        <button onClick={toggleCart}><Link to={'/checkout'}>Checkout</Link></button>
                    </div>
                </div>
            </ListGroup>
        </div>
    )
}

export default Carts;