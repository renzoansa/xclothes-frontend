import { useState } from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import FormWrapper from "../FormWrapper";
import FormTitle from "../FormTitle";
import FormSuccess from "../FormSuccess";
import * as userService from "../../services/userService";

const updateUserCredentials = (name, value) => (userCredentials) => ({
  ...userCredentials,
  [name]: value,
});

const RegisterForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [successMessage, setSuccesssMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials(updateUserCredentials(name, value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userCredentials.password !== userCredentials.passwordConfirmation) {
      return alert("Password does not match");
    }

    const user = {
      name: userCredentials.displayName,
      email: userCredentials.email,
      password: userCredentials.password,
      passwordConfirmation: userCredentials.passwordConfirmation,
    };

    try {
      await userService.createUser(user);
      setSuccesssMessage("Successful register");
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });
    } catch (error) {
      console.error(error);
      setSuccesssMessage(null);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Register</FormTitle>
      <FormItem
        label="Display Name"
        id="displayName"
        name="displayName"
        type="text"
        value={userCredentials.displayName}
        onChange={handleChange}
        required
      />
      <FormItem
        label="Email"
        id="email"
        name="email"
        type="email"
        value={userCredentials.email}
        onChange={handleChange}
        required
      />
      <FormItem
        label="Password"
        id="password"
        name="password"
        type="password"
        value={userCredentials.password}
        onChange={handleChange}
        required
      />
      <FormItem
        label="Password Confirmation"
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        value={userCredentials.passwordConfirmation}
        onChange={handleChange}
        required
      />
      {successMessage && <FormSuccess>{successMessage}</FormSuccess>}
      <Button type="submit">Register</Button>
    </FormWrapper>
  );
};

export default RegisterForm;
