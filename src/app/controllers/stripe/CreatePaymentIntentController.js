import Stripe from "stripe";
import * as Yup from "yup";
import "dotenv/config";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity * 100, 0);
  return Math.round(total); // valor em centavos
};

class CreatePaymentIntentController {
  async store(req, res) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required(),
          })
        ),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false, strict: true });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { products } = req.body;
    const amount = calculateOrderAmount(products);

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "brl",
        automatic_payment_methods: { enabled: true },
      });

      res.json({
        clientSecret: paymentIntent.client_secret,
        dashboardLink: `https://dashboard.stripe.com/payments/${paymentIntent.id}`,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new CreatePaymentIntentController();