import React from 'react'
import { Hero } from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { AboutDiseases } from '../components/AboutDiseases'
import { PredictionSection } from '../components/PredictionSection'
import { SliderSection } from '../components/Slider'
export const Home = () => {


    return (
        <div>
            <Hero />
            <AboutSection />
            <AboutDiseases />
            <PredictionSection/>
            <SliderSection/>
        </div>
    )
}
