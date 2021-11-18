import { useSelector } from "react-redux";
import { StyledCheckout, CheckoutWrapper } from "./styles.js";
import CheckoutItem from "../../components/CheckoutItem";
import { selectAllCartItems } from "../../store/shared/cartSlice.js";
import Wrapper from "../../components/Wrapper";
import TotalCheckout from "../../components/TotalCheckout/index.js";

const Checkout = () => {
  const cartItems = useSelector(selectAllCartItems);

  return (
    <>
      <StyledCheckout>
        <Wrapper>
          <CheckoutWrapper>
            {cartItems.map((cartItem) => (
              <CheckoutItem
                key={cartItem.clothingId}
                clothingId={cartItem.clothingId}
                quantity={cartItem.quantity}
              />
            ))}
          </CheckoutWrapper>
        </Wrapper>
      </StyledCheckout>
      <TotalCheckout />
    </>
  );
};

export default Checkout;
