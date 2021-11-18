import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 0.1rem solid lightgray;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 4.8rem;
`;

export const Logo = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
`;

export const MenuToggle = styled.button`
  position: absolute;
  left: 0;
  border: 0;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CartIconWrapper = styled(Link)`
color: black;
  position: absolute;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const CartIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
  user-select: none;
`;

export const CartIconItemsCount = styled.span`
  font-size: 1.2rem;
  padding: 0.4rem;
  position: absolute;
  right: -0.8rem;
  top: -0.8rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  border-radius: 2.5rem;
  border: 0.1rem solid black;
  user-select: none;
`;

export const Menu = styled.nav`
  position: absolute;
  top: 100%;
  background-color: white;
  left: 0;
  right: 0;
  border-bottom: 0.1rem solid lightgray;
`;

export const MenuItem = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;
  text-align: center;
  padding: 1.6rem 0;
  font-weight: bold;
`;
