import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <div>
      <div className="flex p-4 justify-between items-center border-b border-gray-300 flex-wrap">
        <div className="flex items-center">
          <Link to='/'><h2 className="font-bold lg:text-6xl text-4xl text-purple-600">
            Bogura <span className=" text-red-500">Services</span>
          </h2></Link>
        </div>

        <div className=" hidden lg:block">
          <div className="flex items-center gap-4 ">
            <p className=" font-bold text-2xl">Join Our Network</p>
            <div className="flex items-center gap-2 bg-slate-700 text-slate-100 p-2 rounded-lg hover:bg-slate-100 hover:text-slate-700 font-bold group relative cursor-pointer">
              <FaUserCircle />
              <p>Sign In</p>
              <IoIosArrowDown />
              <div className="absolute -left-40 top-6   hidden w-[250px] rounded-md bg-slate-600 p-2 mt-3   text-white group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/aboutus">Sign In</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/careers">Sign Up</NavLink>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden block cursor-pointer group relative">
        <GiHamburgerMenu className=" font-extrabold text-5xl text-purple-600" />

        <div className="absolute -left-60 top-2   hidden w-[250px] rounded-md bg-slate-600 p-2 mt-1   text-white group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/aboutus">Sign In</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/careers">Sign Up</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/">Home</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/about">About</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/services">Services</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/category">Category</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/company-list">Company List</NavLink>{" "}
                  </li>
                  <li className="p-2 hover:bg-slate-200 hover:text-slate-600">
                    <NavLink to="/contact">Contact</NavLink>{" "}
                  </li>
                </ul>
              </div>
        </div>
      </div>
      <div className="bg-gray-100 hidden lg:block">
        <div className="flex justify-start divide-x-2 divide-slate-700 text-xl ">
            <Link to='/'><p className="    p-2 px-4 text-slate-600 text-xl">Home</p></Link>
            <Link to='/about'><p className="  p-2 px-4 text-slate-600 text-xl">About</p></Link>
            <Link to='/services'><p className="  p-2 px-4 text-slate-600 text-xl">Services</p></Link>
            <Link to='/category'><p className="  p-2 px-4 text-slate-600 text-xl">Category</p></Link>
            <Link to='/company-list'><p className="  p-2 px-4 text-slate-600 text-xl">Company List</p></Link>
            <Link to='/contact'><p className="  p-2 px-4 text-slate-600 text-xl">Contact</p></Link>
        </div>

      </div>
      <div>
      
      </div>
    </div>
  );
};

export default Navbar;
