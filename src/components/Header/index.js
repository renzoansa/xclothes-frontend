import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../Wrapper";
import Routes from "../../routes";
import { useState } from "react";
import {
  StyledHeader,
  HeaderContent,
  Logo,
  MenuToggle,
  Menu,
  MenuItem,
  CartIcon,
  CartIconWrapper,
  CartIconItemsCount,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, selectAccessToken } from "../../store/shared/userSlice";
import { selectCartItemsCount } from "../../store/shared/cartSlice";

const toggleMenu = (showMenu) => !showMenu;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const accessToken = useSelector(selectAccessToken);
  const cartItemsCount = useSelector(selectCartItemsCount);

  const handleToggleClick = () => setShowMenu(toggleMenu);

  const handleMenuItemClick = () => setShowMenu(false);

  const handleLogoutClick = () => {
    handleMenuItemClick();
    dispatch(logOutUser());
  };

  return (
    <StyledHeader>
      <Wrapper>
        <HeaderContent>
          <Logo>xclothes</Logo>
          <MenuToggle aria-label="showMenu" onClick={handleToggleClick}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </MenuToggle>
          <CartIconWrapper to={Routes.checkout}>
            <CartIcon icon={faShoppingCart} />
            <CartIconItemsCount>{cartItemsCount}</CartIconItemsCount>
          </CartIconWrapper>
        </HeaderContent>
      </Wrapper>
      {showMenu && (
        <Menu>
          <Wrapper>
            <ul>
              <li>
                <MenuItem to={Routes.home} onClick={handleMenuItemClick}>
                  Home
                </MenuItem>
              </li>
              <li>
                {accessToken.token ? (
                  <MenuItem onClick={handleLogoutClick} to={Routes.home}>
                    Logout
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleMenuItemClick} to={Routes.login}>
                    Login
                  </MenuItem>
                )}
              </li>
            </ul>
          </Wrapper>
        </Menu>
      )}
    </StyledHeader>
  );
};

export default Header;
