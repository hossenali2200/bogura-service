import React from 'react'
import { FaStar,   } from "react-icons/fa6";

const PopularHome = () => {
  return (
    <div className='mt-8'>

        <h2 className='font-bold text-3xl mb-4'>Popular Home Project</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div>
                
                <div>
                    <div className='flex justify-between border-2 p-4 rounded-t-lg'>
                        <h2 className=' font-bold text-lg'>Waste/Junk Removal</h2>
                        <div className='flex gap-2 '>
                        <FaStar  className=' text-lg mt-1 text-red-500' />
                        <p> 4.5 (300)</p>
                        </div>
                    </div>
                    <div className='relative  '>
                        <img className=' h-[300px] w-full ' src="https://plus.unsplash.com/premium_photo-1672287578336-c32928d2524d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxXNmJDV2h3YVhtd3x8ZW58MHx8fHx8" alt="" />
                        <p className=' absolute top-56 bg-white text-black p-2 rounded-lg left-4 '>From $200/Book Now</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='flex justify-between border-2 p-4 rounded-t-lg'>
                        <h2 className=' font-bold text-lg'>Handy Person For Small Project</h2>
                        <div className='flex gap-2 '>
                        <FaStar  className=' text-lg mt-1 text-red-500' />
                        <p> 4.5 (300)</p>
                        </div>
                    </div>
                    <div className='relative  '>
                        <img className=' h-[300px] w-full ' src="https://plus.unsplash.com/premium_photo-1682597000871-82c0ab1298ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p className=' absolute top-56 bg-white text-black p-2 rounded-lg left-4 '>From $200/Book Now</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='flex justify-between border-2 p-4  rounded-t-lg'>
                        <h2 className=' font-bold text-lg'>One Time Cleaning Service</h2>
                        <div className='flex gap-2 '>
                        <FaStar  className=' text-lg mt-1 text-red-500' />
                        <p> 4.5 (300)</p>
                        </div>
                    </div>
                    <div className='relative  '>
                        <img className=' h-[300px] w-full ' src="https://plus.unsplash.com/premium_photo-1678304224523-d25b4117558f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D" alt="" />
                        <p className=' absolute top-56 bg-white text-black p-2 rounded-lg left-4 '>From $200/Book Now</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PopularHome