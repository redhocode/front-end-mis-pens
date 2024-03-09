/* eslint-disable react/prop-types */


const Label = (props) => {
    const {htmlFor, children} = props;
  return (
    <>
      <label htmlFor={htmlFor} className="block mt-2 mb-2 text-dark">
       {children}
      </label>
    </>
  );
}

export default Label;