import React from 'react'

const Grow = () => {
  return (
    <div>
        <div className='bg-indigo-900 grid grid-cols-1 lg:grid-cols-2'>
            <div className='p-48'>
                <h2 className='text-2xl font-extrabold text-white mb-8'>Grow your business <br /> with us. Become an Angi Pro today.</h2>
                <button className=' bg-white text-indigo-600 font-bold px-6 p-2 rounded-lg mt-2'>Learn More</button>
            </div>
            <div className='p-8 py-20  '>
                <img className='rounded-lg' src="https://media.angi.com/s3fs-public/HP-Angi-Pro.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Grow