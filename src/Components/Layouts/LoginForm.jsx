/* eslint-disable react/prop-types */

import InputForm from "../Elements/Form/InputForm";
import Button from "../Elements/Buttons/Button";
const LoginForm = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-xs">
          <h1 className="mb-2 text-3xl font-bold text-center text-primary">
            Welcome
          </h1>
          <p className="mb-8 font-medium text-center text-slate-800">Login dulu cuy</p>
         
            <InputForm label="Username" name="username" type="text" />
            <InputForm label="Password" name="password" type="password" />
            <Button variant="primary">Login</Button>
          
        </div>
      </div>
    </>
  );
};

export default LoginForm;
