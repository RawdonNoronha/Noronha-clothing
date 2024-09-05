export const addItemToCart = (cartItems, cartItemToAdd) => {
    //checks if the same item is added to the cart
    const existingCartITem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    ); 
    //if its not there we increase the quantity
    if (existingCartITem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    //else will add the new item to the cartitem and add the quantity field
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}