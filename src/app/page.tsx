import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyChooseInlocon from '@/components/sections/WhyChooseInlocon'
import JobOpportunities from '@/components/sections/JobOpportunities'
import Groups from '@/components/sections/Groups'
import OurPortal from '@/components/sections/OurPortal'
import WhatWeOffer from '@/components/sections/WhatWeOffer'
import ExtraFeatures from '@/components/sections/ExtraFeatures'
import TrustedBy from '@/components/sections/TrustedBy'
import Testimonials from '@/components/sections/Testimonials'
import Blog from '@/components/sections/Blog'
import CallToAction from '@/components/sections/CallToAction'

// Home page composition with all main landing sections
export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChooseInlocon />  
      <JobOpportunities />
      <Groups />
      <OurPortal />
      <WhatWeOffer />
      <ExtraFeatures />
      <TrustedBy />
      <Testimonials />
      <Blog />
      <CallToAction />
    </>
  )
} 