import React from 'react'
import Banner from '../components/Home/banner'
import {HeroSection} from '../components/Home/HeroSection'
import Features from '../components/Home/Features'
import Testimonial from '../components/Home/Testimonial'
import CallToAction from '../components/Home/CallToAction'
import Footer from '../components/Home/footer'

function Home() {
  return (
    <div>
        {/* <Banner/> */}
        <HeroSection/>
        <Features/>
        <Testimonial/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home