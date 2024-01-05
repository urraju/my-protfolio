import TitleContent from "../TitleContent/TitleContent";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const ServiceSection = () => { 

    const handleModal1 = () => {
        document.getElementById("my_modal_3").showModal()
    }
    const handleModal2 = () => {
        document.getElementById("my_modal_4").showModal()
    }
    const handleModal3 = () => {
        document.getElementById("my_modal_5").showModal()
    }

  return (
    <div className="px-2 md:px-5 mt-32">
      <TitleContent heading={"Service"} subHeading={"What i Service"} />
      <div className="max-w-screen-2xl font-poppins mt-20 mx-auto  flex flex-col md:flex-row justify-center items-center gap-10">

        <div className="border  bg-white/5  backdrop-blur w-full  md:w-[330px] rounded border-opacity-40 p-6 px-8 border-sky-500">
          <CgWebsite className="text-4xl text-sky-500 mb-4" />
          <h1 className="text-2xl text-white">
            Web <br />
            Designer
          </h1>
          <button onClick={handleModal1} className="flex text-sm hover:tracking-wider duration-300 mt-4 items-center gap-1 ">
            View More <BsArrowRightShort className="text-lg mt-1" />{" "}
          </button>
        </div>

        <div className="border w-full md:w-[330px] rounded  bg-white/5  backdrop-blur border-opacity-40 p-6 px-8 border-sky-500">
          <FaCode className="text-4xl text-sky-500 mb-4" />
          <h1 className="text-2xl text-white">
            UI/UX <br />
            Designer
          </h1>
          <button onClick={handleModal2} className="flex text-sm hover:tracking-wider duration-300 mt-4 items-center gap-1 ">
            View More <BsArrowRightShort className="text-lg mt-1" />{" "}
          </button>
        </div>

        <div className="border bg-sky-500 bg-opacity-50  bg-white/5  backdrop-blur w-full md:w-[330px] rounded border-opacity-40 p-6 px-8 border-sky-500">
          <MdDesignServices className="text-4xl text-sky-500 mb-4" />
          <h1 className="text-2xl text-white">
            Branding <br />
            Designer
          </h1>
          <button onClick={handleModal3} className="flex text-sm hover:tracking-wider duration-300 mt-4 items-center gap-1 ">
            View More <BsArrowRightShort className="text-lg mt-1" />{" "}
          </button>
        </div>
      </div>

      {/* modal show number 1 */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box border border-sky-500 border-opacity-40">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="text-center font-poppins">
            <h1 className="text-3xl text-sky-500">Web Designer</h1>
            <p className="text-sm font-light mt-5 text-white tracking-wide">Services with more than 1 years of <br />experience.Providing quality work to clients <br /> and companies.</p>
          </div>


          <div className="mt-10">

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I develop the user Interface.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/>Web page development.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I create ux element interactions.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I position your company brand.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/>Design and mockups of products for companies.</p>

          </div>


        </div>
      </dialog>

      {/* modal number 2 */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box border border-sky-500 border-opacity-40">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="text-center font-poppins">
            <h1 className="text-3xl text-sky-500">UI/UX Designer</h1>
            <p className="text-sm font-light mt-5 text-white tracking-wide">Services with more than 1 years of <br />experience.Providing quality work to clients <br /> and companies.</p>
          </div>


          <div className="mt-10">

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I develop the user Interface.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/>Web page development.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I create ux element interactions.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I position your company brand.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/>Design and mockups of products for companies.</p>

          </div>


        </div>
      </dialog>

        {/* modal number 3  */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box border border-sky-500 border-opacity-40">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="text-center font-poppins">
            <h1 className="text-3xl text-sky-500">Branding Designer</h1>
            <p className="text-sm font-light mt-5 text-white tracking-wide">Services with more than 1 years of <br />experience.Providing quality work to clients <br /> and companies.</p>
          </div>


          <div className="mt-10">

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I develop the user Interface.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/>Web page development.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I create ux element interactions.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/> I position your company brand.</p>

            <p className="flex items-center mb-4 gap-2"><IoCheckmarkCircleOutline className="text-lg text-sky-500"/>Design and mockups of products for companies.</p>

          </div>


        </div>
      </dialog>
    </div>
  );
};
export default ServiceSection;
