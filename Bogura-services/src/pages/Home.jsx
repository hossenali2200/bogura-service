import React from 'react'
import Hero from '../components/Hero'
import PopularProject from '../components/PopularProject'
import PopularHome from '../components/PopularHome'

const Home = () => {
  return (
    <div> 
      <Hero/>
      <PopularProject/>
      <PopularHome/>
    </div>
  )
}

export default Home