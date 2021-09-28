import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }



    return (
        <div>
            <h2> Flower Added : {props.cart.length} </h2>
            <h1> Flower Price : $ {total} </h1>

        </div>
    );
};

export default Cart;