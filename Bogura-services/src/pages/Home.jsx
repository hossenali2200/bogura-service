import React from 'react'
import Hero from '../components/Hero'
import PopularProject from '../components/PopularProject'
import PopularHome from '../components/PopularHome'
import Banner from '../components/Banner'
import PopularCost from '../components/PopularCost'
import Inbox from '../components/Inbox'

const Home = () => {
  return (
    <div> 
      <Hero/>
      <PopularProject/>
      <PopularHome/>
      <Banner/>
      <PopularCost/>
      <Inbox/>
    </div>
  )
}

export default Home