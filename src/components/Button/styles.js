import styled from "styled-components/macro";

export const WrappedButton = styled.button`
  font-size: 1.6rem;
  color: white;
  background-color: midnightblue;
  border-radius: 1.6rem;
  padding: 1rem 1.6rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: wait;
    background-color: royalblue;
  }
`;
