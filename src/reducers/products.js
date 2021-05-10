const reducer = (
    state =
        [
            {
                id: 1,
                productName: "Apple",
                description: "Very good fruit",
                count: 0
            },
            {
                id: 2,
                productName: "Orange",
                description: "Vitamin 3",
                count: 0
            },
            {
                id: 3,
                productName: "Cherry",
                description: "Not a Very good fruit",
                count: 0
            }
        ],

    action
) => {
    const index = state.indexOf(action.product);

    switch (action.type) {
        case "PRODUCT_COUNT_HAS_BEEN_INCREMENTED":
            const countAdded = action.product.count + 1;
            return [...state.slice(0, index), { id: action.product.id, productName: action.product.productName, description: action.product.description, count: countAdded }, ...state.slice(index + 1)];

        case "PRODUCT_COUNT_HAS_BEEN_DECREMENTED":
            const countRemoved = action.product.count - 1;
            if (countRemoved >= 0) {
                return [...state.slice(0, index), { id: action.product.id, productName: action.product.productName, description: action.product.description, count: countRemoved }, ...state.slice(index + 1)];
            }
            return state;

        case "PRODUCT_HAS_BEEN_REMOVED":
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case "PRODUCT_HAS_BEEN_ADDED":

            return [...state, action.product];

        default:
            return state;
    }
};
export default reducer;