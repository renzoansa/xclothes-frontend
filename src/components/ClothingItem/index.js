import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/shared/cartSlice.js";
import { selectById } from "../../store/clothesSlice.js";
import {
  StyledClothingItem,
  StyledImg,
  Name,
  Price,
  Button,
  Content,
} from "./styles.js";

const ClothingItem = ({ clothingId }) => {
  const clothing = useSelector((state) => selectById(state, clothingId));
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(clothingId));
  };

  return (
    <StyledClothingItem>
      <StyledImg src={clothing.image} alt="" />
      <Content>
        <Name>{clothing.name}</Name>
        <Price>{`$${clothing.priceInDollarCents / 100}`}</Price>
        <Button onClick={handleClick}>Add to cart</Button>
      </Content>
    </StyledClothingItem>
  );
};

export default ClothingItem;
