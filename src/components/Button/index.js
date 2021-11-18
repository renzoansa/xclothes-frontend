import { WrappedButton } from "./styles";

const Button = ({ children, type, onClick, disabled }) => (
  <WrappedButton type={type} onClick={onClick} disabled={disabled}>
    {children}
  </WrappedButton>
);

export default Button;
