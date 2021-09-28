import React from 'react';

const Flowername = (props) => {

    const { cart } = props;

    let flowername = "";

    for (const product of cart) {

        flowername = flowername + product.name;
    }


    return (

        <ul>
            {
                cart.map(product => <li> {product.name}</li>)
            }
        </ul>


    );
};

export default Flowername;