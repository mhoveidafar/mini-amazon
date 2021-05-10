export const productCountIncremented = (product) => {
    return (dispatch) => {
        dispatch({ type: "PRODUCT_COUNT_HAS_BEEN_INCREMENTED", product: product });
    }
}

export const productCountDecremented = (product) => {
    return (dispatch) => {
        dispatch({ type: "PRODUCT_COUNT_HAS_BEEN_DECREMENTED", product: product });
    }
}

export const productRemoved = (product) => {
    return (dispatch) => {
        dispatch({ type: "PRODUCT_HAS_BEEN_REMOVED", product: product });
    }
}

export const productAdded = (product) => {
    return (dispatch) => {
        dispatch({ type: "PRODUCT_HAS_BEEN_ADDED", product: product });
    }
}