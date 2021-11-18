import Button from "../Button";
import FormItem from "../FormItem";
import FormWrapper from "../FormWrapper";
import FormTitle from "../FormTitle";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, selectLoginErrorMessage } from "../../store/shared/userSlice";
import { useState } from "react";
import FormError from "../FormError";
import * as config from "../../config";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: config.isDevMode() ? "jhon.doe@email.com" : "",
    password: config.isDevMode() ? "123456789" : "",
  });
  const loginErrorMessage = useSelector(selectLoginErrorMessage);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userCredentials = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(logInUser(userCredentials));
  };

  const handleChange = (event) =>
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>
      <FormItem
        id="loginEmail"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        required
      />
      <FormItem
        id="loginPassword"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        required
      />
      <Button type="submit">Login</Button>
      {loginErrorMessage && <FormError>{loginErrorMessage}</FormError>}
    </FormWrapper>
  );
};

export default LoginForm;
