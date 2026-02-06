import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection' // ✅ IMPORTANT
import FeaturedSection from '../components/FeaturedSection'

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturedSection/>
    </>
  )
}

export default Home
