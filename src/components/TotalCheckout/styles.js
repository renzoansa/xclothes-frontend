import styled from "styled-components/macro";

export const height = "6.4rem";

export const StyledTotalCheckout = styled.div`
  position: fixed;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  left: 0;
  right: 0;
  height: ${height};
  border-top: 0.1rem solid lightgray;
`;

export const TotalCheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${height};
`;

export const Total = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
`;
