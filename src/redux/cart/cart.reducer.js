import cartActionTypes from "./cart.types";
import { addItemToCart } from "./car.util";
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //adding existing items to the array and adding new items as payload
            }

        default:
            return state;
    }
}

export default CartReducer