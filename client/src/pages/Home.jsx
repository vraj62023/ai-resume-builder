import React from 'react'
import Banner from '../components/Home/banner.jsx'
import {HeroSection} from '../components/Home/HeroSection.jsx'
import Features from '../components/Home/Features.jsx'
import Testimonial from '../components/Home/Testimonial.jsx'
import CallToAction from '../components/Home/CallToAction.jsx'
import Footer from '../components/Home/footer.jsx'

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