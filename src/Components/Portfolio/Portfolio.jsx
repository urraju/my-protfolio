import ass12 from "../../assets/portfolio/ass12.png";
import ass11 from "../../assets/portfolio/ass11.png";
import ass10 from "../../assets/portfolio/ass10.png";
import ass9 from "../../assets/portfolio/ass9.png";
import TitleContent from "../TitleContent/TitleContent";
import { FaGithub } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="p-2 md:p-5 my-20">
      <TitleContent heading={"Portfolio"} subHeading={"Most Recent projects"} />
      <div className="flex mt-20 flex-col  gap-5 justify-center items-center">
        <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
          <div className="border w-96  border-sky-500 border-opacity-30 rounded-lg p-2">
            <div className="img-hover">
              <img className="w-96  rounded-lg " src={ass12} alt="" />
            </div>
            <p className="font-poppins font-light text-sm mt-1">
              The online platforms for watch haven you can purchase products
              from our site
            </p>
            <div className="flex items-center gap-5 juscen  mt-2">
              <a href="https://github.com/urraju/watch-haven-a12">
                <FaGithub className="text-xl" />
              </a>
              <a
                className="flex border border-sky-900 text-sm rounded px-2  items-center justify-center gap-"
                href="https://assignmant-12.web.app/"
              >
                Demo <BsArrowRightShort className="mt-1 text-lg  " />
              </a>
            </div>
          </div>
          <div className="border w-96 border-sky-500 border-opacity-30 rounded-lg p-2">
            <div className="img-hover">
              <img className="w-96  rounded-lg " src={ass11} alt="" />
            </div>
            <p className="font-poppins font-light text-sm mt-1">
              The online platforms for watch haven you can purchase products
              from our site
            </p>
            <div className="flex items-center gap-5 juscen  mt-2">
              <a href="https://github.com/urraju/hotel-booking-client-a11">
                <FaGithub className="text-xl" />
              </a>
              <a
                className="flex border border-sky-900 text-sm rounded px-2  items-center justify-center gap-"
                href="https://assignmant-11.web.app/"
              >
                Demo <BsArrowRightShort className="mt-1 text-lg  " />
              </a>
            </div>
          </div>

        </div>
        <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
          <div className="border w-96  border-sky-500 border-opacity-30 rounded-lg p-2">
            <div className="img-hover">
              <img className="w-96  rounded-lg " src={ass10} alt="" />
            </div>
            <p className="font-poppins font-light text-sm mt-1">
              The online platforms for watch haven you can purchase products
              from our site
            </p>
            <div className="flex items-center gap-5 juscen  mt-2">
              <a href="https://github.com/urraju/electic-bazar-client-a10">
                <FaGithub className="text-xl" />
              </a>
              <a
                className="flex border border-sky-900 text-sm rounded px-2  items-center justify-center gap-"
                href="https://assignmant-10-bda66.web.app/"
              >
                Demo <BsArrowRightShort className="mt-1 text-lg  " />
              </a>
            </div>
          </div>
          <div className="border w-96 border-sky-500 border-opacity-30 rounded-lg p-2">
            <div className="img-hover">
              <img className="w-96  rounded-lg " src={ass9} alt="" />
            </div>
            <p className="font-poppins font-light text-sm mt-1">
              The online platforms for watch haven you can purchase products
              from our site
            </p>
            <div className="flex items-center gap-5 juscen  mt-2">
              <a href="https://github.com/urraju/event-managemant-a9">
                <FaGithub className="text-xl" />
              </a>
              <a
                className="flex border border-sky-900 text-sm rounded px-2  items-center justify-center gap-"
                href="https://assignmant-9.web.app/"
              >
                Demo <BsArrowRightShort className="mt-1 text-lg  " />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default Portfolio;
