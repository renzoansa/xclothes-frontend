import styled from "styled-components/macro";
import { height } from "../../components/TotalCheckout/styles";

export const StyledCheckout = styled.div`
  padding-top: 3.2rem;
  padding-bottom: calc(${height} + 1.6rem);
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
