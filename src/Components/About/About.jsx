// import aboutPic from "../../assets/myPic/me2.jpg";
import aboutPic from "../../assets/myPic/profile.png";
import {
  MdBackup,
  MdFeed,
  MdHeadsetMic,
  MdWorkspacePremium,
} from "react-icons/md";
import resume from '../../assets/resume/Riad Hasan Raju (1).pdf'

import TitleContent from "../TitleContent/TitleContent";
const About = () => {
  return (
    <div className="mt-20 my-20 lg:p-5 p-2">
      <TitleContent heading={"About Me"} subHeading={"My Introduction"} />
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center mt-20 md:gap-32 gap-10 justify-center">
        <div>
          <img className="w-96 rounded-2xl border border-sky-500 border-opacity-40" src={aboutPic} alt="" />
        </div>
        {/* about title  */}
        <div>
          <div className="flex gap-5">
            <div className="border text-center p-5 font-poppins rounded-lg border-sky-500 border-opacity-40 px-7">
              <MdWorkspacePremium className=" mx-auto text-4xl mb-2" />
              <p className="text-lg">Experience</p>
              <p className="font-light">1 + Years</p>
            </div>
            <div className="border text-center p-5 font-poppins rounded-lg border-sky-500 border-opacity-40 px-7">
              <MdFeed className=" mx-auto text-4xl mb-2" />
              <p className="text-lg">Completed</p>
              <p className="font-light">30 + Projects</p>
            </div>
            <div className="border hidden md:block text-center p-5 font-poppins rounded-lg border-sky-500 border-opacity-40 px-7">
              <MdHeadsetMic className=" mx-auto text-4xl mb-2" />
              <p className="text-lg">Support </p>
              <p className="font-light">Every Time</p>
            </div>
          </div>
          <div className="mt-10 font-poppins">
            <p>
              Frontend developer, i create web pages with UI/UX <br /> user
              interface,I have years of experience and <br /> many clients are
              happy with projects carried out.
            </p>
            <a href={resume} download={resume} className="flex w-max gap-3 mt-5 bg-sky-600 px-4 py-2 rounded items-center text-gray-200  ">
              Download cv <MdBackup className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
