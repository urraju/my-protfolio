import { MdHtml, MdVerified } from "react-icons/md";
import TitleContent from "../TitleContent/TitleContent";
import { FaBootstrap, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAxios, SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="lg:p-5 p-2 my-20">
      <TitleContent heading={"Skills"} subHeading={"My technical level"} />
      <div className="max-w-screen-2xl mt-16 mx-auto  flex  items-center flex-col md:flex-row  justify-center gap-20">
        <div className="p-5 border rounded border-sky-500  border-opacity-50 md:px-16 w-full md:w-[500px] ">
          <h1 className="text-center mb-7 text-white text-2xl">Frontend Developer</h1>

          <div className="flex justify-between">
            <div className="flex items-start justify-center mb-3 gap-2">
              <FaHtml5 className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="text-xl text-white">HTML</p>
                <p className="font-light">Expart</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaCss3  className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="uppercase text-xl text-white">Css</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start justify-center mb-3 gap-2">
              <FaBootstrap className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="text-xl text-white">Bootstrap</p>
                <p className="font-light">Basic</p>
              </div>
            </div>
            <div className="flex gap-2">
              <SiTailwindcss  className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="uppercase text-xl text-white">Tailwind</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start justify-center mb-3 gap-2">
              <FaJs className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="text-xl text-white">Javascript</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaReact  className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="uppercase text-xl text-white">react</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start justify-center mb-3 gap-2">
              <FaGit className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="text-xl text-white">Git</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaGithub  className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="uppercase text-xl text-white">gitHub</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
          </div>

        </div>
        {/* backend  */}
        <div className=" ">
        <div className="p-5 border rounded border-sky-500  border-opacity-50 md:px-16  md:w-[500px] ">
          <h1 className="text-center mb-7 text-white text-2xl">Backend Developer</h1>

          <div className="flex justify-between">
            <div className="flex items-start justify-center mb-3 gap-2">
              <FaNodeJs className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="text-xl text-white">Node.Js</p>
                <p className="font-light">Basic</p>
              </div>
            </div>
            <div className="flex gap-2">
              <SiExpress className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="uppercase text-xl text-white">Express.js</p>
                <p className="font-light">Basic</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start justify-center mb-3 gap-2">
              <SiMongodb className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="text-xl text-white">Mongodb</p>
                <p className="font-light">Basic</p>
              </div>
            </div>
            <div className="flex gap-2">
              <SiFirebase  className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="uppercase text-xl text-white">Firebase</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start justify-center mb-3 gap-2">
              <SiAxios className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="text-xl text-white">Axios</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex gap-2">
              <MdVerified className="text-xl mt-1 text-sky-500" />
              <div className=" font-poppins">
                <p className="uppercase text-xl text-white">TanStack</p>
                <p className="font-light">Basic</p>
              </div>
            </div>
          </div>
          

        </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
