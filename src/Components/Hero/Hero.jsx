import React from "react";
class HeroSection extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="mx-auto">
            <div className="relative min-h-screen">
              <video
                className="absolute inset-0 object-cover w-full h-full"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://pjj.pens.ac.id/wp-content/uploads/2019/10/DJI_06721.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-sky-900 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center outline outline-secondary">
                <div className="max-w-full p-6 rounded-xl text-neutral-content">
                  <img
                    className="p-5 mb-5 bg-white rounded-md card"
                    src="https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ-300x98.png"
                    alt=""
                    width="386"
                    height="126"
                    srcSet="https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ-300x98.png 300w, https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ-768x251.png 768w, https://pmb.pens.ac.id/wp-content/uploads/2024/01/LOGO-PJJ.png 840w"
                    sizes="(max-width: 386px) 100vw, 386px"
                  ></img>
                  <h1 className="mb-5 text-5xl font-bold text-white">
                    D3 Teknik Informatika
                  </h1>
                  <p className="mb-5 text-white">
                    Mixing The Best of Distance and On-Campus Higher Education
                  </p>
                  <button
                    className=" btn bg-secondary text-primary outline-none"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    open modal
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="w-11/12 max-w-5xl modal-box">
                      <h3 className="text-lg font-bold">Hello!</h3>
                      <p className="py-4">Click the button below to close</p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default HeroSection;
