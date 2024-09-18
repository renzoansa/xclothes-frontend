import axios from "axios";
import * as config from "../config";

export const createPaymantIntent = async (
  stripe,
  elements,
  CardElement,
  items,
  formData,
  returnUrl
) => {
  const { paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card: elements.getElement(CardElement),
  });

  try {
    await axios.post(`${config.apiUrl}/create-payment-intent`, {
      paymentMethodId: paymentMethod.id,
      checkoutItems: items,
      returnUrl,
      ...formData,
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
