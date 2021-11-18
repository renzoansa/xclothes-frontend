import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { Content } from "./styles";
import Wrapper from "../Wrapper";
import { useState } from "react";
import FormItem from "../FormItem";
import Button from "../Button";
import {
  createPaymantIntent,
  selectPaymentStatus,
  showCheckoutFormUpdated,
} from "../../store/paymenthSlice";
import { useDispatch, useSelector } from "react-redux";
import * as config from "../../config";
import * as paymentStatuses from "../../shared/paymentStatus";
import { useHistory } from "react-router";
import Routes from "../../routes";
import CenteredModal from "../CenterdModal";

export const CheckoutForm = () => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [form, setForm] = useState({
    email: config.isDevMode() ? "test@email.com" : "",
    name: config.isDevMode() ? "test" : "",
    address: config.isDevMode() ? "naranjal" : "",
    city: config.isDevMode() ? "lima" : "",
    country: config.isDevMode() ? "Pery" : "",
  });
  const dispatch = useDispatch();
  const paymentStatus = useSelector(selectPaymentStatus);

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(
      createPaymantIntent({ stripe, elements, CardElement, formData: form })
    ).then(() => {
      history.push(Routes.home);
    });
  };

  const handleChange = (event) => {
    setForm((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    dispatch(showCheckoutFormUpdated(false));
  };

  return (
    <CenteredModal onClose={handleClick}>
      <Wrapper>
        <Content onSubmit={handleSubmit}>
          <CardElement />
          <FormItem
            onChange={handleChange}
            required
            value={form.email}
            label="Email"
            type="email"
            name="email"
          />
          <FormItem
            onChange={handleChange}
            required
            value={form.name}
            label="Name"
            name="name"
          />
          <FormItem
            onChange={handleChange}
            required
            value={form.address}
            label="Address"
            name="address"
          />
          <FormItem
            onChange={handleChange}
            required
            value={form.city}
            label="City"
            name="city"
          />
          <FormItem
            onChange={handleChange}
            required
            value={form.country}
            label="Country"
            name="country"
          />
          {paymentStatus === paymentStatuses.loading ? (
            <Button disabled type="submit">
              Loading...
            </Button>
          ) : (
            <Button type="submit">Pay</Button>
          )}
        </Content>
      </Wrapper>
    </CenteredModal>
  );
};

export default CheckoutForm;
