import React from 'react'
import dr from '../assets/dr-kothia2.png'
import whatwedo from "../assets/Doctors.png"
import { Title } from '../components/Title'
import { SliderSection } from '../components/Slider'
export const AboutUsPage = () => {
  return (
    <div className=' bg-ivory'>
        <div className="py-5"></div>
        <div className="py-5"></div>
        <div className="text-green">
            <Title title="What do we do"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex">
                    <img src={whatwedo} className='img-fluid m-auto'/>
                </div>
                <div className="col-lg-6 text-green">
                    <p className='py-3'>
                    At our clinic, we specialize in treating anorectal diseases using the holistic principles of Ayurveda. Dr. Manish Kothia combines years of expertise with the ancient wisdom of Ayurvedic medicine to provide effective, natural, and minimally invasive treatments for conditions such as piles, fissures, and fistulas.
                    </p>
                    <h5 className=" fw-semibold">Ayurvedic Approach to Anorectal Diseases</h5>
                    <p className=''>Ayurveda, a time-tested medical system, emphasizes balance in the body and mind. For anorectal diseases, this means addressing the root cause of the problem rather than just the symptoms. Our Ayurvedic treatments focus on:</p>
                    <p> <b>1) Herbal Remedies: </b>Utilizing potent herbs to reduce inflammation, promote healing, and alleviate pain.</p>
                    <p> <b>2) Dietary Adjustments: </b>Crafting personalized dietary plans to improve digestion and prevent recurrence of anorectal issues.</p>
                    <p> <b>3) Lifestyle Modifications: </b>Advising on lifestyle changes that enhance overall gut health and support the healing process.</p>
                    <p> <b>4) Kshar Sutra Therapy: </b>A specialized Ayurvedic procedure for treating fistulas and piles, known for its effectiveness and minimal invasiveness.</p>
                </div>
            </div>
        </div>
        <div className="py-5"></div>
        <div>
        <div className="text-green py-5">
            <Title title="Meet Dr. Manish Kothia"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        dw
                    </div>
                    <div className="col-lg-6 d-flex">
                        <img src={dr} className='img-fluid h-75 border m-auto'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="py-5">
        <SliderSection/>
        </div>
    </div>
  )
}
