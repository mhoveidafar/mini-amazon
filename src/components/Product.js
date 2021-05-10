import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';



const Product = ({ product, handleCountIncrement, handleCountDecrement, handleRemove }) => {


    return (
        <>
            <Box >
                <Grid container alignItems="center" direction="row">
                    <Grid item direction="column"><Typography>{product.productName}</Typography></Grid>
                    <Grid item direction="column"><Typography>{product.description}</Typography></Grid>
                    <Grid item direction="column"><Button onClick={() => handleCountIncrement(product)}>Add</Button></Grid>
                    <Grid item direction="column"><Button onClick={() => handleCountDecrement(product)}>Remove</Button></Grid>
                    <Grid item direction="column"><div>{product.count}</div></Grid>
                    <Grid item direction="column"><Button onClick={() => handleRemove(product)}>Delete</Button></Grid>
                </Grid>
            </Box>

        </>
    );
}

export default Product;