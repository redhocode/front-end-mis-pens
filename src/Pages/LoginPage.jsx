import LoginForm from "../Components/Layouts/LoginForm";

const Login = () => {
  return (
    <>
      <section className="container content-center w-auto h-full pt-10 pb-10 mx-auto lg:pt-40">
        <div className="min-h-screen bg-white lg:rounded-xl hero lg:min-h-px shadow-lg">
          <div className="flex-col mt-12 mb-10 hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left ">
              <img
                className=""
                src="https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ-300x98.png"
                alt=""
                width="786"
                height="126"
                srcSet="https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ-300x98.png 300w, https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ-768x251.png 768w, https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ.png 840w"
                sizes="(max-width: 386px) 100vw, 386px"
              ></img>
            </div>
            <div className="w-full max-w-md bg-white shadow-xl card shrink-0">
              <form className="card-body">
                <LoginForm />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
