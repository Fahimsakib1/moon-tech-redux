import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes/actionTypes";

export const initialState = {
    cart: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_TO_CART:
            return {
                ...state,
                cart : [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((cartProduct) => cartProduct._id !== action.payload._id)
            }


        default:
            return state
    }
}


export default productReducer;
