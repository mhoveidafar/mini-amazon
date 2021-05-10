import React, { useState } from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import { connect } from "react-redux";
import * as produtActions from '../actions/products-actions';

const mapStateToProps = (state) => {
    return {
        productsList: state.products
    };
};

const Products = ({ productsList, dispatch }) => {
    console.log("products is called with: ", productsList);

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');

    console.log("productList: ", productsList);

    const handleCountIncrement = async (product) => {
        dispatch(produtActions.productCountIncremented(product));
    }

    const handleCountDecrement = async (product) => {
        dispatch(produtActions.productCountDecremented(product));
    }

    const handleRemove = async (product) => {
        dispatch(produtActions.productRemoved(product));
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        dispatch(produtActions.productAdded({ id: 4, productName: productName, description: description, count: 0 }));
    }

    return (
        <>
            {productsList && productsList.map((product, index) => {
                return <Product product={product} key={index}
                    handleCountIncrement={handleCountIncrement}
                    handleCountDecrement={handleCountDecrement}
                    handleRemove={handleRemove}></Product>
            })}
            <form onSubmit={handleAdd}>
                <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="submit" />
            </form>
            <ShoppingCart productsList={productsList}></ShoppingCart>
        </>
    );
}

export default connect(mapStateToProps)(Products);