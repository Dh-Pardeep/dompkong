import React, { useEffect } from "react";
import HeroSection from '../HeroSection'
import About from '../About'
import Utilities from '../Utilities'
import TheKong from '../TheKong'
import MintSection from '../MintSection'
import Partners from '../Partners'
import MeetTheTeam from '../MeetTheTeam'
import MyAccordion from '../MyAccordion'
import MyRoadMap from '../MyRoadMap'
import BackToTop from '../common/BackToTop'
import LoaderHome from '../common/LoaderHome'
import Aos from "aos";
import "aos/dist/aos.css";
const Homepage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, [])
    return (
        <div  className='bg-black relative z-[1000] overflow-hidden'>
            <BackToTop/>
            <LoaderHome/>
            <HeroSection />
            <About />
            <Utilities />
            <TheKong />
            <MintSection />
            <MyRoadMap/>
            <Partners />
            <MeetTheTeam />
            <MyAccordion/>
        </div>
    )
}

export default Homepage