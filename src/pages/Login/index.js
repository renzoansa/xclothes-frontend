import RegisterForm from "../../components/RegisterForm";
import LoginForm from "../../components/LoginForm";
import Wrapper from "../../components/Wrapper";
import { LoginWrapper, Flex } from "./styles";

const Login = () => {
  return (
    <LoginWrapper>
      <Wrapper>
        <Flex>
          <RegisterForm />
          <LoginForm />
        </Flex>
      </Wrapper>
    </LoginWrapper>
  );
};

export default Login;
