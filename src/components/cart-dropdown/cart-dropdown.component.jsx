import React from "react";
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { selectCartItems } from "../../redux/cart/carts.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, dispatch }) =>{
    //dispatch is passed automatically if mapDispatchToProps is not called
    const navigate= useNavigate();
    
    const handleClick = () => {
        navigate('/checkout');
    }

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) : 
                    (<span className="empty-message">YOUR CART IS EMPTY!</span>)
                }
            </div>
            <CustomButton onClick={() => {
                handleClick();
                dispatch(toggleCartHidden());
            }}>CHECKOUT</CustomButton>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);