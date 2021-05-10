import React from 'react';

const ShoppingCart = ({ productsList }) => {
    let count =0;
    productsList.map(product => count = product.count + count)
    return (
        <>
            <div >{count}</div>
        </>
    );
}

export default ShoppingCart;