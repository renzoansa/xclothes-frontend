import Wrapper from "../../components/Wrapper";
import ClothingCategory from "../../components/ClothingCategory";
import { StyledHome, SuccessfulMessage } from "./styles";
import hatsImage from "./images/hats.jpg";
import jacketsImage from "./images/jackets.jpg";
import sneakersImage from "./images/sneakers.jpg";
import Routes from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import {
  paymentStatusUpdated,
  selectPaymentStatus,
} from "../../store/paymenthSlice";
import * as paymentStatuses from "../../shared/paymentStatus";
import CenteredModal from "../../components/CenterdModal";

const Home = () => {
  const paymentStatus = useSelector(selectPaymentStatus);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(paymentStatusUpdated(paymentStatuses.idle));
  };
  return (
    <>
      <Wrapper>
        <StyledHome>
          <ClothingCategory
            image={hatsImage}
            to={Routes.hats}
            alt="hats"
            text="HATS"
          />
          <ClothingCategory
            image={jacketsImage}
            to={Routes.jackets}
            alt="jackets"
            text="JACKETS"
          />
          <ClothingCategory
            image={sneakersImage}
            to={Routes.sneakers}
            alt="sneakers"
            text="SNEAKERS"
          />
        </StyledHome>
      </Wrapper>
      {paymentStatus === paymentStatuses.succeeded && (
        <CenteredModal onClose={handleClose}>
          <Wrapper>
            <SuccessfulMessage>Successful payment</SuccessfulMessage>
          </Wrapper>
        </CenteredModal>
      )}
    </>
  );
};

export default Home;
