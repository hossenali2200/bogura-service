import React from 'react'
import { FiSlack } from "react-icons/fi";

const AppBanner = () => {
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 p-8 gap-6'>
            <div>
                <img className='rounded-lg' src="https://media.angi.com/s3fs-public/HP-Angi-App.png" alt="" />
            </div>
            <div className='lg:p-8 lg:py-16 mb-16'>
                <FiSlack className='text-4xl bg-blue-400 rounded-lg mb-6' />
                <h2 className='text-4xl font-bold mb-4'>The best of Angi is <br /> in the app</h2>
                <p className='font-semibold mb-4'>Keep track of projects, message pros directly, pay securely, and more - all in the Angi app.</p>
            <div className='lg:flex  lg:gap-2  '>
                <img className='mb-4 lg:h-16 w-56 cursor-pointer' src="https://media.angi.com/sites/all/themes/altheme/images/app-store-badge-60%402x.png" alt="" />
                <img className='lg:h-16 w-56 cursor-pointer' src="https://media.angi.com/sites/all/themes/altheme/images/google-play-badge-60@2x.png" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner