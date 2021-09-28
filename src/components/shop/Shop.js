import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Flowername from '../Flowername/Flowername';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);


    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('./flowerdata.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const handleAddToCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="shop-container" >

            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product._id}    //*********** FIXING THE KEY ERROR PROBLEM ***********//
                        product={product}

                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>

            <div className="cart-container">

                <Cart cart={cart}> </Cart>
                <Flowername cart={cart}>  </Flowername>



            </div>



        </div>
    );
};

export default Shop;