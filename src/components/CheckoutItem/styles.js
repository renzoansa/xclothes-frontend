import styled from "styled-components/macro";

export const StyledCheckoutItem = styled.div`
  background-color: white;
  border: 0.1rem solid lightgray;
  border-radius: 1.6rem;
  display: grid;
  grid-template-columns: 12rem auto 12rem;
  height: 12rem;
  overflow: hidden;
  gap: 1.6rem;
`;

export const CheckoutItemImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
`;

export const CheckoutItemImg = styled.img``;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckoutQuantityWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 1.6rem;
`;

export const CheckoutQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutDescription = styled.p`
  font-size: 1.4rem;
`;

export const CheckoutPrice = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Sign = styled.span`
  padding: 0 0.8rem;
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Count = styled.span`
  font-size: 1.6rem;
`;
