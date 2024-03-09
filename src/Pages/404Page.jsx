import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen flex-col">
      <span className=" lg:text-[500px] text-primary font-black text-center text-[60px]">
        404
      </span>
      <span className=" lg:text-[10px] text-primary font-black text-center">
        {error.statusText || error.message}
      </span>
    </div>
  );
};

export default ErrorPage;
