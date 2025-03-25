import React from 'react'
import { useState } from 'react';
import ProductsList from './ProductsList';
const ShoppingCart = ()=>{
    let [count,setCount] = useState(0);
    let [total,setTotal] = useState(0);
    const addToCart = (price) => {
        setCount(count + 1);
        setTotal(total + price);
    };
    const removeFromCart = (price)=>{
        setCount(count-1);
        setTotal(total-price)
    }

    return(
        <div>
            <h2>Welcome to Products App</h2>
            <h5>Shopping Cart</h5>
            <span>Total:{total}</span>
            <span>Count:{count}</span>
            <ProductsList addToCart={addToCart} removeFromCart={removeFromCart}/>

        </div>

    )
}

export default ShoppingCart;