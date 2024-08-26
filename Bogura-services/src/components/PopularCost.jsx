import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const PopularCost = () => {
  return (
    <div>
        <section class="container p-6 mx-auto space-y-3 dark:bg-gray-800 dark:text-white">

<h4 class="text-xl font-bold mt-8 text-gray-700 capitalize dark:text-gray-300 md:text-3xl text-start">Popular cost guides</h4>
 

<div class="flex items-center justify-center">
    <div class="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3  ">
        {/* card */}
         <div className=' border-2 p-4 px-10 rounded-md hover:bg-gray-200 cursor-pointer '>
            <button className='bg-emerald-700 text-white font-semibold text-xs mb-2 p-2 rounded-lg' >Bogura Cost Guide</button>
            <div className='flex justify-between gap-4'>
                <p className='text-md font-semibold'>Kitchen Remodel Cost</p>
                <MdOutlineKeyboardArrowRight className='text-2xl mt-1 ml-12' />
            </div>
         </div>
         <div className=' border-2 p-4 px-10 rounded-md hover:bg-gray-200 cursor-pointer '>
            <button className='bg-emerald-700 text-white font-semibold text-xs mb-2 p-2 rounded-lg' >Bogura Cost Guide</button>
            <div className='flex justify-between gap-4'>
                <p className='text-md font-semibold'>Cost To Build A House</p>
                <MdOutlineKeyboardArrowRight className='text-2xl mt-1 ml-12' />
            </div>
         </div>
         <div className=' border-2 p-4 px-10 rounded-md hover:bg-gray-200 cursor-pointer '>
            <button className='bg-emerald-700 text-white font-semibold text-xs mb-2 p-2 rounded-lg' >Bogura Cost Guide</button>
            <div className='flex justify-between gap-4'>
                <p className='text-md font-semibold'>Roof Replacement  Cost</p>
                <MdOutlineKeyboardArrowRight className='text-2xl mt-1 ml-12' />
            </div>
         </div>
         <div className=' border-2 p-4 px-10 rounded-md hover:bg-gray-200 cursor-pointer '>
            <button className='bg-emerald-700 text-white font-semibold text-xs mb-2 p-2 rounded-lg' >Bogura Cost Guide</button>
            <div className='flex justify-between gap-4'>
                <p className='text-md font-semibold'>Water Heater Replacement Cost</p>
                <MdOutlineKeyboardArrowRight className='text-2xl mt-1 ml-8' />
            </div>
         </div>
         <div className=' border-2 p-4 px-10 rounded-md hover:bg-gray-200 cursor-pointer '>
            <button className='bg-emerald-700 text-white font-semibold text-xs mb-2 p-2 rounded-lg' >Bogura Cost Guide</button>
            <div className='flex justify-between gap-4'>
                <p className='text-md font-semibold'>Bathroom Remodel Cost</p>
                <MdOutlineKeyboardArrowRight className='text-2xl mt-1 ml-12' />
            </div>
         </div>
         <div className=' border-2 p-4 px-10 rounded-md hover:bg-gray-200 cursor-pointer '>
            <button className='bg-emerald-700 text-white font-semibold text-xs mb-2 p-2 rounded-lg' >Bogura Cost Guide</button>
            <div className='flex justify-between gap-4'>
                <p className='text-md font-semibold'>Solar Panel Cost</p>
                <MdOutlineKeyboardArrowRight className='text-2xl mt-1 ml-12' />
            </div>
         </div>


    </div>
</div>
</section>

    </div>
  )
}

export default PopularCost