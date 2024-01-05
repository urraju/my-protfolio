import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbar = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/servicesection"
      >
        Service
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/skills"
      >
        Skills
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/portfolio"
      >
        Portfolio
      </NavLink>
    </>
  );

  return (
    <div className="">
      <div className=" lg:max-w-screen-2xl  mx-auto  top-0  md:px-0">
        <div className="navbar lg:max-w-screen-2xl fixed  bg-black/30 px-8  rounded-xl top-0 backdrop-blur text-white z-30">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn text-sky-500 text-xl btn-ghost   lg:hidden"
              >
                <FaBars />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow  backdrop-blur bg-black/50   w-52 rounded border border-gradient-to-tr  border-sky-500 border-opacity-50 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
              >
                {navbar}
              </ul>
            </div>
            <NavLink to="/" className="  ">
              <div className="flex items-center ">
                <a className="uppercase md:text-3xl text-xl font-poppins md:first-letter:text-4xl first-letter:text-2xl" href="">
                  <span className="text-sky-500 border-t border-l px-1 border-sky-500 font-semibold ">UR</span> Raju
                </a>
              </div>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-[14px] font-normal uppercase font-roboto gap-5 text-white ">
              {navbar}
            </ul>
          </div>

          <div className="navbar-end flex gap-2 items-center">
            <button className="bg-sky-600 text-white px-4 py-1 rounded font-poppins text-sm font-light">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
