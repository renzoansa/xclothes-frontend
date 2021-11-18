import Wrapper from "../../components/Wrapper";
import { Title, Grid } from "./styles";
import ClothingItem from "../../components/ClothingItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchClothesByCategoryId,
  selectClothingIdsByCategoryId,
} from "../../store/clothesSlice";

const ClothingSection = ({ sectionTitle, clothingCategoyId }) => {
  const dispatch = useDispatch();
  const clothingIds = useSelector(
    selectClothingIdsByCategoryId(clothingCategoyId)
  );

  useEffect(() => {
    dispatch(fetchClothesByCategoryId(clothingCategoyId));
  }, [dispatch, clothingCategoyId]);

  return (
    <Wrapper>
      <Title>{sectionTitle}</Title>
      <Grid>
        {clothingIds.map((clothingId) => (
          <ClothingItem key={clothingId} clothingId={clothingId} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ClothingSection;
