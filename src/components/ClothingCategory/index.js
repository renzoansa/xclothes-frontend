import {
  StyledClothingCategory,
  StyledImg,
  StyledFigure,
  StyledFigCaption,
} from "./styles.js";
const ClothingCategory = ({ image, to, alt, text }) => {
  return (
    <StyledClothingCategory to={to}>
      <StyledFigure>
        <StyledImg src={image} alt={alt} />
        <StyledFigCaption>{text}</StyledFigCaption>
      </StyledFigure>
    </StyledClothingCategory>
  );
};

export default ClothingCategory;
