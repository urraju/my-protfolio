import TitleContent from "../TitleContent/TitleContent";

const Qualification = () => {
  return (
    <div className="md:p-5 p-2 my-20 hidden md:block">
      <TitleContent
        heading={"Qualification"}
        subHeading={"My personal journey"}
      />
      <div className="max-w-screen-2xl mx-auto mt-20">
        <div className="flex font-poppins justify-around mb-16">
          <h1 className="text-3xl text-white">Education</h1>
          <h1 className="text-3xl text-white">Experience</h1>
        </div>
        <ul className="timeline  max-md:timeline-compact timeline-vertical ">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5  text-sky-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <hr className="bg-white" />
          </li>
          <li>
            <hr className="bg-white" />
            <div  className="border border-sky-600 border-opacity-40 p-5 space-y-1 rounded-lg w-72">
              <p className="text-white text-4xl">SSC</p>
              <p className="text-xl font-semibold text-sky-600">2019-2020</p>
              <p className="text-lg">Group : Science</p>
              <p className="text-lg">Fulbaria Govt High School</p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5  text-sky-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div  className="border space-y-1 border-sky-600 border-opacity-40 p-5 rounded-lg w-72">
              <p className="text-white text-4xl">UI/UX</p>
              <p className="text-sky-600 text-xl">Designer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores.</p>
            </div>
            <hr className="bg-white" />
          </li>
          <li>
            <hr className="bg-white" />
            <div className="border space-y-1 border-sky-600 border-opacity-40 p-5 rounded-lg w-72">
              <p className="text-white text-4xl">HSC</p>
              <p className="text-xl text-sky-600 font-semibold">2020-2022</p>
              <p className="text-lg">Group : Ars</p>
              <p className="text-lg">Fulbaria Degree Collage</p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5  text-sky-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div  className="border space-y-1 border-sky-600 border-opacity-40 p-5 rounded-lg w-72">
              <p className="text-white text-4xl">Responsive</p>
              <p className="text-sky-600 text-xl">Designer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores.</p>
            </div>
            <hr className="bg-white" />
          </li>
          <li>
            <hr className="bg-white" />
            <div className="border border-sky-600 border-opacity-40 space-y-1 p-5 rounded-lg">
              <p className="text-white text-4xl">Honours</p>
              <p className="text-xl text-sky-600 font-semibold">2022-2025</p>
              <p className="text-lg">Group : Science</p>
              <p className="text-lg">University Of Information Technology </p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5  text-sky-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div  className="border space-y-1 border-sky-600 border-opacity-40 p-5 rounded-lg w-72">
              <p className="text-white text-4xl">Full Time</p>
              <p className="text-sky-600 text-xl">Work Experince</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores.</p>
            </div>
            
          </li>
           
        </ul>
      </div>
    </div>
  );
};
export default Qualification;
