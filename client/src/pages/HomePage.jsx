import React from 'react'
import Hero from '../components/Home/Hero'
import WhyChoose from '../components/Home/WhyChoose'
import CallToAction from '../components/Home/CallToAction'
import Testimonials from '../components/Home/Testimonials'
import ContactSection from '../components/Home/Contact'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <WhyChoose />
        <CallToAction />
        <ContactSection />
        <Testimonials />
        
    </div>
  )
}

export default HomePage