// This is your test secret API key.
const stripe = require('stripe')('pk_test_51Px9OPLXvkDPmBcbMjJqs2ZkRc6oGv4A1uJTEdhOUfmazx0jK42L0eOGUgTvTA4LL5j30wJuCw6buBzCsdQMlirB00oWrcme4b');
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));