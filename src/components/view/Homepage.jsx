import React from 'react'
import HeroSection from '../HeroSection'
import About from '../About'
import Utilities from '../Utilities'
import TheKong from '../TheKong'
import MintSection from '../MintSection'
import Partners from '../Partners'
import MeetTheTeam from '../MeetTheTeam'
import MyAccordion from '../MyAccordion'
import MyFooter from '../common/MyFooter'
import MyRoadMap from '../MyRoadMap'

const Homepage = () => {
    return (
        <div  className='bg-black relative z-[1000]'>
            <HeroSection />
            <About />
            <Utilities />
            <TheKong />
            <MintSection />
            <MyRoadMap/>
            <Partners />
            <MeetTheTeam />
            <MyAccordion/>
            <MyFooter/>
        </div>
    )
}

export default Homepage