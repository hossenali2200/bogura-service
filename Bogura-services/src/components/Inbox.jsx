import React from 'react'

const Inbox = () => {
  return (
    <div>
        <div class="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="rounded-xl bg-emerald-700 py-6 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
    <div class="lg:w-0 lg:flex-1">
       
      <p class="mt-4 max-w-3xl text-3xl text-gray-100">
      Get <span className=' text-emerald-100'>free project cost <br /> information</span> delivered to your inbox
      </p>
    </div>
    <div class="mt-6 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
      <form method="post" class="sm:flex space-y-2 mb-6">
        <label for="name" class="sr-only">Name</label>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="name" type="name" autocomplete="name" class="w-full rounded-md sm:mr-3 border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700" placeholder="Your name"/>
        <input id="email-address" type="email" autocomplete="email" class="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700" placeholder="Your email"/> 
        
        <input type="checkbox" value="1" class="hidden" tabindex="-1" autocomplete="off"/>
        <br />
        
      </form>
      <button type="submit" class="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-emerald-800 font-bold   hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Subscribe</button>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Inbox