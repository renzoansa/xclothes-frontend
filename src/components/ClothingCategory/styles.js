import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const StyledClothingCategory = styled(Link)`
  border: 0.1rem solid gray;
  overflow: hidden;
  border-radius: 1.6rem;
`;

export const StyledImg = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

export const StyledFigure = styled.figure`
  position: relative;
`;

export const StyledFigCaption = styled.figcaption`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 3.2rem;
  font-weight: bold;
`;
