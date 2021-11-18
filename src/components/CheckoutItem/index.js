import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/shared/cartSlice";
import { fetchClothingById, selectById } from "../../store/clothesSlice";
import {
  StyledCheckoutItem,
  CheckoutItemImg,
  CheckoutInfo,
  CheckoutQuantityWrapper,
  CheckoutItemImgWrapper,
  CheckoutDescription,
  CheckoutPrice,
  CheckoutQuantity,
  Sign,
  Count,
} from "./styles.js";

const centsToDollars = (cents) => cents / 100;

const CheckoutItem = ({ clothingId, quantity }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClothingById(clothingId));
  }, [dispatch, clothingId]);

  const clothing = useSelector((state) => selectById(state, clothingId));

  const handleAddItemClick = () => {
    dispatch(addItem(clothingId));
  };
  const handleRemoveItemClick = () => {
    dispatch(removeItem(clothingId));
  };

  if (!clothing) {
    return null;
  }

  return (
    <StyledCheckoutItem>
      <CheckoutItemImgWrapper>
        <CheckoutItemImg src={clothing.image}></CheckoutItemImg>
      </CheckoutItemImgWrapper>
      <CheckoutInfo>
        <CheckoutDescription>{clothing.name}</CheckoutDescription>
        <CheckoutPrice>
          {`$${centsToDollars(clothing.priceInDollarCents)}`}
        </CheckoutPrice>
      </CheckoutInfo>
      <CheckoutQuantityWrapper>
        <CheckoutQuantity>
          <Sign onClick={handleAddItemClick}>+</Sign>
          <Count>{quantity}</Count>
          <Sign onClick={handleRemoveItemClick}>-</Sign>
        </CheckoutQuantity>
      </CheckoutQuantityWrapper>
    </StyledCheckoutItem>
  );
};

export default CheckoutItem;
