import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Px9OPLXvkDPmBcbMjJqs2ZkRc6oGv4A1uJTEdhOUfmazx0jK42L0eOGUgTvTA4LL5j30wJuCw6buBzCsdQMlirB00oWrcme4b";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
        label="Pay Now" 
        name="noronha Clothing Ltd." 
        billingAddress 
        shippingAddress 
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total is €${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
    />
    )
}

export default StripeCheckoutButton