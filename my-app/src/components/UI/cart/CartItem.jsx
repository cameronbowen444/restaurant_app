import React from 'react'
import { ListGroupItem } from 'reactstrap';

import { useDispatch } from 'react-redux';
import '../../../styles/cart-item.css';
import { addItem, removeItem, deleteItem } from '../../../store/cartSlice';

const CartItem = ({item}) => {

    const {id, title, price, image01, quantity, totalPrice} = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(addItem({ id, title, price, image01 }))
    }

    const decrementItem = () => {
        dispatch(removeItem(id))
    }

    const deleteWholeItem = () => {
        dispatch(deleteItem(id))
    }


    return (
        <>
            <ListGroupItem className='border-0 cart__item'>
                <div className="cart__item-info d-flex gap-2">
                    <img src={image01} alt="product-img" />
                    <div className="cart__product-info d-flex w-100 align-items-center justify-content-between gap-4">
                        <div>
                            <h6 className='cart__product-title'>{title}</h6>
                            <p className='d-flex align-items-center gap-5 cart__product-price'>
                                {quantity}x <span>${totalPrice}</span>
                            </p>
                            <div className='d-flex align-items-center justify-content-between gap-3 increase__decrease-btn'>
                                <span className='increase__btn' onClick={incrementItem}>
                                    <i class="ri-add-line"></i>
                                </span>
                                <span className='quantity'>{quantity}</span>
                                <span className='decrease__btn' onClick={decrementItem}>
                                    <i class="ri-subtract-line"></i>
                                </span>
                            </div>
                        </div>
                        <span className='delete__btn' onClick={deleteWholeItem}>
                            <i className='ri-close-line'></i>
                        </span>
                    </div>
                </div>
            </ListGroupItem>
        </>
    )
}

export default CartItem