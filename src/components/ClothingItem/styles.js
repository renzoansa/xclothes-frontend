import styled from "styled-components/macro";

export const StyledClothingItem = styled.div`
  border: 0.1rem solid lightgrey;
  overflow: hidden;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.6rem;
  justify-content: space-between;
`;

export const StyledImg = styled.img`
  width: 100%;
  max-height: 30rem;
  object-fit: scale-down;
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0 1.6rem 1.6rem;
`;

export const Name = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export const Price = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 1.6rem;
  text-align: center;
  background-color: midnightblue;
  color: white;
  padding: 0.8rem;
  border-radius: 1.6rem;
  margin-top: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`;
