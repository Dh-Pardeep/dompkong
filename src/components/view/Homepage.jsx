import React from 'react'
import HeroSection from '../HeroSection'
import About from '../About'
import Utilities from '../Utilities'
import TheKong from '../TheKong'
import MintSection from '../MintSection'
import Partners from '../Partners'
import MeetTheTeam from '../MeetTheTeam'
import MyAccordion from '../MyAccordion'

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Utilities />
            <TheKong />
            <MintSection />
            <Partners />
            <MeetTheTeam />
            <MyAccordion/>
        </div>
    )
}

export default Homepage