import React from 'react'

import "../../../styles/product-card.css";

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';

const ProductCard = (props) => {

    const {id, title, image01, price} = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({id, title, image01, price}))
    }

    return (
        <div className='product__item' >
                <Link to={`/foods/${id}`}>
                    <div className='product__img'>
                        <img src={image01} alt="product-img"  />
                    </div>
                </Link>
                <div className='product__content'>
                    <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                    <div className='d-flex align-items-center justify-content-evenly gap-3'>
                        <span className='product__price'>${price}</span>
                        <button 
                            className='addTOCart__btn'
                            onClick={addToCart}
                        >
                            Add
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default ProductCard;