import { useState } from 'react'
 
 
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Category from './pages/Category'
import Contact from './pages/Contact'
import CompanyList from './pages/CompanyList'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
   

  return (
    <>
        <div className='lg:max-w-7xl lg:mx-auto '>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/services' element={ <Services/> } />
            <Route path='/category' element={ <Category/> } />
            <Route path='/company-list' element={ <CompanyList/> } />
            <Route path='/contact' element={ <Contact/> } />
             
            
          </Routes>
          <Footer/>

        </div>
    </>
  )
}

export default App
