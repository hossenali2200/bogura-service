import React from 'react'
import Hero from '../components/Hero'
import PopularProject from '../components/PopularProject'
import PopularHome from '../components/PopularHome'
import Banner from '../components/Banner'
import PopularCost from '../components/PopularCost'
import Inbox from '../components/Inbox'
import Work from '../components/Work'
import AppBanner from '../components/AppBanner'
import Grow from '../components/Grow'

const Home = () => {
  return (
    <div> 
      <Hero/>
      <PopularProject/>
      <PopularHome/>
      <Banner/>
      <PopularCost/>
      <Inbox/>
      <Work/>
      <AppBanner/>
      <Grow/>
    </div>
  )
}

export default Home