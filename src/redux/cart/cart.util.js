export const addItemToCart = (cartItems, cartItemToAdd) => {
    //checks if the same item is added to the cart
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    ); 
    //if its not there we increase the quantity
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    //else will add the new item to the cartitem and add the quantity field
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    //checking if item exists
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    //remove the entire item when only 1 item quantity is left
    if(existingCartItem.quantity === 1)
    {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
    }

    //removes only 1 from quantity
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}