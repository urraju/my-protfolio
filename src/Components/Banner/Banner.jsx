import profile from "../../assets/myPic/profile.png";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div className="mx-w-screen-2xl h-[600px]   mx-auto lg:p-5 p-2">
      <div className="flex justify-evenly  items-center">
        <div>
            {/* <div>
                 <a href=""><FaInstagram /></a>
            </div> */}
          <div className="font-poppins">
            <h1 className="text-4xl mb-2">Hi, I'm UR Raju</h1>

            <TypeAnimation
              className="text-sky-500 font-poppins   text-xl mb-2 mt-1"
              sequence={[
                "Fornt End Developer",
                1000,
                "Learn Mern Stack",
                1000,
                "",
                1000,
                "Wish Full Stack Development",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

            <p className="font-light mt-3 text-gray-400">
              I'm creative frontend developer, and I'm <br /> very passionate dedicated
              to my work
            </p>
            <button className="bg-sky-600 mt-5 px-4 py-2 rounded text-white">Say Hello</button>
          </div>
        </div>
        <div className="mt-20 ">
          <img className=" home_img w-[400px] rounded-tl-3xl border-opacity-20 shadow-2xl border-8 border-sky-500" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
