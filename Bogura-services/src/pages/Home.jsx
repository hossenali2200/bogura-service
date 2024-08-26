import React from 'react'
import Hero from '../components/Hero'
import PopularProject from '../components/PopularProject'
import PopularHome from '../components/PopularHome'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div> 
      <Hero/>
      <PopularProject/>
      <PopularHome/>
      <Banner/>
    </div>
  )
}

export default Home