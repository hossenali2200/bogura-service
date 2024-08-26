import React from "react";
import { FaBriefcase , FaTree } from "react-icons/fa";
import { GiTap } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { IoMdConstruct } from "react-icons/io";
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div>
      <div className=" bg-emerald-100 h-[600px] ">
        <div className="lg:p-20 ">
          <div className="lg:w-[700px]  lg:mx-auto text-center  ">
          <h2 className="font-extrabold lg:text-6xl py-8 text-3xl">Find top-rated certified <br /> pros in your area.</h2>
          </div>
          
          {/* form  */}
            <div className="">
            <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
            <input
              type="text"
              placeholder="Search anything"
              className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
              name="topic"
            />
            <button className="flex flex-row items-center justify-center min-w-[40px] p-2 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-red-500  text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
            <IoIosSearch className="text-4xl" />
            </button>
          </form>
            </div>

            {/* service card */}
            <div className="grid grid-cols-3 lg:grid-cols-6 mt-8 gap-4 lg:w-[700px] lg:mx-auto">
              <div className="flex flex-col items-center">
              <FaBriefcase className=" text-6xl font-extrabold mb-2 text-red-500" />
              <p>HandyPerson</p>
              </div>
              <div className="flex flex-col items-center">
              <FaTree className=" text-6xl font-extrabold mb-2 text-red-500" />
              <p>LandScaping</p>
              </div>
              <div className="flex flex-col items-center">
              <GiTap className=" text-6xl font-extrabold mb-2 text-red-500" />
              <p>Plumbing</p>
              </div>
              <div className="flex flex-col items-center">
              <GiLightBulb className=" text-6xl font-extrabold mb-2 text-red-500" />
              <p>Electrical</p>
              </div>
              <div className="flex flex-col items-center">
              <IoMdConstruct className=" text-6xl font-extrabold mb-2 text-red-500" />
              <p>Remodeling</p>
              </div>
              <div className="flex flex-col items-center">
              <FaHouseChimney className=" text-6xl font-extrabold mb-2 text-red-500" />
              <p>Roofing</p>
              </div>

            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
