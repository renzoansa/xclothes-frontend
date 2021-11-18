import { FormItemWrapper, FormItemLabel, FormItemInput } from "./styles";

const FormItem = ({ label, id, name, type, value, onChange, required }) => {
  return (
    <FormItemWrapper>
      <FormItemLabel htmlFor={id}>{label}</FormItemLabel>
      <FormItemInput
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </FormItemWrapper>
  );
};

export default FormItem;
