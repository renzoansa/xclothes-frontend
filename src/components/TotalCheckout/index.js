import { useDispatch, useSelector } from "react-redux";
import { selectTotalCheckout } from "../../store/shared/cartSlice.js";
import Wrapper from "../Wrapper/index.js";
import { StyledTotalCheckout, Total, TotalCheckoutWrapper } from "./styles.js";
import Button from "../Button";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm";
import Modal from "../Modal/index.js";
import {
  selectShowCheckoutForm,
  showCheckoutFormUpdated,
} from "../../store/paymenthSlice.js";

const stripePromise = loadStripe("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL");

const TotalCheckout = () => {
  const totalCheckout = useSelector(selectTotalCheckout);
  const showCheckoutForm = useSelector(selectShowCheckoutForm);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showCheckoutFormUpdated(true));
  };

  if (!totalCheckout) {
    return null;
  }

  return (
    <>
      <StyledTotalCheckout>
        <Wrapper>
          <TotalCheckoutWrapper>
            <Button onClick={handleClick}>Checkout</Button>
            <Total>
              <span>$</span>
              {totalCheckout / 100}
            </Total>
          </TotalCheckoutWrapper>
        </Wrapper>
      </StyledTotalCheckout>
      {showCheckoutForm && (
        <Modal>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </Modal>
      )}
    </>
  );
};

export default TotalCheckout;
