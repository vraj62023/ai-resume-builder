import React from 'react'
import Banner from '../components/home/Banner.jsx'
import {HeroSection} from '../components/home/HeroSection.jsx'
import Features from '../components/home/Features.jsx'
import Testimonial from '../components/home/Testimonial.jsx'
import CallToAction from '../components/home/CallToAction.jsx'
import Footer from '../components/home/footer.jsx'

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