import styled from "styled-components/macro";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 0 1.6rem;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Center = styled.div`
  position: relative;
  width: 100rem;
  background-color: white;
  border-radius: 1.6rem;
  border: 0.1rem solid lightgray;
  padding-top: 3.2rem;
  padding-bottom: 1.6rem;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  top: 0;
  padding-top: 0.4rem;
  padding-right: 0.8rem;
  font-size: 1.6rem;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;
