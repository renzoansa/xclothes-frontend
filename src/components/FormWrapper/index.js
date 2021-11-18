import { StyledFormWrapper } from "./styles";

const FormWrapper = ({ children, onSubmit }) => (
  <StyledFormWrapper onSubmit={onSubmit}>{children}</StyledFormWrapper>
);

export default FormWrapper;
