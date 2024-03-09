/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <>
      <div className="mb-4">
        <Label htmlfor={name}>{label}</Label>
        <Input type={type} placeholder={placeholder} name={name} />
      </div>
    </>
  );
};


export default InputForm;
