import React from 'react'
import { RiMessage2Line , RiHome4Line  } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Work = () => {
  return (
    <div>
        <section class="bg-gray-100 mt-2 py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900">How it works</h2>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md  ">
                <RiMessage2Line  className='text-7xl  ' />

                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">1. Tell us what your home needs</h3>
                    <p class="mt-2 text-base text-gray-500">From routine maintenance and repairs to dream home renovations, we can help with any project — big or small.</p>
                </div>
            </div>
            <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md  ">
                <AiOutlineThunderbolt className='text-7xl  ' />

                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">2. We’ll match you with personalized solutions</h3>
                    <p class="mt-2 text-base text-gray-500">See your price and book services in an instant. Or, request and compare quotes from highly rated pros near you.</p>
                </div>
            </div>
            <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md ">
                <RiHome4Line  className='text-7xl  ' />

                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">3. Start to finish, we’ve got you covered</h3>
                    <p class="mt-2 text-base text-gray-500">When you book and pay with Angi, you’re covered by our Happiness Guarantee. We’ll cover your projects up to full purchase price, plus limited damage protection.</p>
                </div>
            </div>
        </div>

        <button className='bg-gray-300 text-black font-semibold text-2xl rounded-lg mt-4 p-2 mb-8'>Learn More</button>

    </div>
    <hr className='h-2 text-gray-700' />

    <div className='mt-8'>
        <h2 className='my-8 m-4 font-bold text-2xl'>Popular remodeling projects</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-4'>
            <div className='relative  '>
                <img className=' h-[500px] w-full rounded-lg ' src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" />
                <div className='absolute top-96 left-4'>
                <p className='  bg-white text-black p-2 rounded-lg  '>From $200/Book Now</p>
                <p className='text-black font-bold'>Lorem ipsum dolor sit amet</p>
                </div>
                
            </div>
            <div className='relative  '>
                <img className=' h-[500px] w-full rounded-lg ' src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <p className=' absolute top-96   text-black font-bold mt-8 p-2 rounded-lg left-4 '>From $200/Book Now</p>
            </div>
            <div className='relative  '>
                <img className=' h-[500px] w-full rounded-lg ' src="https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D" alt="" />
                <div className='absolute top-96 left-4'>
                    <p className='  bg-white text-black p-2 rounded-lg  '>From $200/Book Now</p>
                    <p className='text-black font-bold'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <div className='mt-6 text-center'>
            <p className='text-lg font-bold underline cursor-pointer hover:text-red-600'>Explore all projects</p>
        </div>

    </div>
</section>

    </div>
  )
}

export default Work