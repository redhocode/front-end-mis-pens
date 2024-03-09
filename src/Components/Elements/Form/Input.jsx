/* eslint-disable react/prop-types */
const Input = (props) => {
    const {type , placeholder, name} = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full max-w-xs bg-white input input-bordered"
      />
    </>
  );
}
export default Input;