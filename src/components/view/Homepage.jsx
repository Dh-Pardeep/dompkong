import React from 'react'
import HeroSection from '../HeroSection'
import About from '../About'
import Utilities from '../Utilities'
import TheKong from '../TheKong'
import MintSection from '../MintSection'
import Partners from '../Partners'

const Homepage = () => {
    return (
        <div>
            <HeroSection/>
            <About/>
            <Utilities/>
            <TheKong/>
            <MintSection/>
            <Partners/>
        </div>
    )
}

export default Homepage