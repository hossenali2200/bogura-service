import React from 'react'
import { Gi3dStairs, GiVacuumCleaner, GiWoodenFence, GiTap } from "react-icons/gi";
import { FaStar, FaHouseChimney } from "react-icons/fa6";
import { BiSolidFridge } from "react-icons/bi";
import { MdPestControl, MdOutlineSynagogue } from "react-icons/md";
 

const PopularProject = () => {
  return (
    <div>
        <h2 className='text-3xl font-bold ml-4 mt-8'>Popular projects near you</h2>
       <section className="bg-white dark:bg-gray-900">
  <div className="container px-4   pt-4 mx-auto">

    <div className="grid grid-cols-2   lg:grid-cols-4 border rounded-lg shadow   p-4 md:p-6 text-center">
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start  items-center'>
        <Gi3dStairs className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Decks & Porches</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start items-center'>
        <GiVacuumCleaner className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Home Cleaning</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start items-center'>
        <FaHouseChimney className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Roof Repair</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start items-center'>
        <GiWoodenFence  className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Fence Repair</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start items-center'>
        <BiSolidFridge  className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Appliance Repair</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start items-center'>
        <MdPestControl className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Pest Control</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start items-center'>
        <MdOutlineSynagogue className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Gutter Service</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
      <div className='flex gap-2 justify-start border-2 px-6 p-4 hover:bg-gray-200 hover:text-black'>
        <div className='w-[30%] mx-auto flex justify-start items-center'>
        <GiTap className='font-bold text-4xl text-red-500' />
        </div>
        <div className='flex flex-col justify-start'>
            <h3 className='font-semibold text-lg'>Plumbing Service</h3>
            <div className='flex gap-2 '>
            <FaStar  className=' text-lg mt-1 text-red-500' />
            <p> 4.5 (300)</p>
            </div>
            <p>from $200</p>

        </div>
      </div>
       
    </div>
     
  </div>
  <p className='m-4'>Price shown is the national median price of minimum job size for Angi's pre-priced offering. Actual pricing may vary.</p>
</section>

    </div>
  )
}

export default PopularProject