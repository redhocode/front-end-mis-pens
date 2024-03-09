/* eslint-disable react/prop-types */

const Button = (props) => {
  const { children, variant = "primary" } = props;
  return (
    <button
      className={`btn bg-${variant} w-full max-w-xs mt-4 text-white rounded-md shadow-md outline-none`}
    >
      {children}
    </button>
  );
};
export default Button;
