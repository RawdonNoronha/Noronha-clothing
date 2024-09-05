import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
});

export default rootReducer;