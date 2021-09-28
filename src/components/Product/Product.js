import React from 'react';
import './Product.css'

import { FcLike } from 'react-icons/fc'; // Import Icon form ract github

const Product = (props) => {



    const { index, picture, color, name, origin_name,
        price } = props.product;   //********** DESTRUCTURING THE ARRAY *********/
    return (
        <div className="product">
            <div>
                <img src={picture} alt="" />
                <h2> Flower Index : {index + 1} </h2>
                <h3> Flower Name : {name}</h3>
                <h3> Flower Color : {color}</h3>
                <h3> Flower Origin : {origin_name}</h3>
                <h3> Flower Price : ${price}</h3>

                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular_btn"> <FcLike /> Add to List </button>
            </div>
        </div>
    );
};

export default Product;