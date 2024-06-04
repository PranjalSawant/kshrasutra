import React from 'react'
import drs from '../assets/Doctors.png'
import { Button } from './Button'
export const Hero = () => {
  return (
    <div className='bg-ivory py-5'>
        <div className="container py-5">
            <div className="py-5"></div>
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                   <div className="text-green">
                   <h2 className='py-3 fw-bold'>Discover Timeless<br></br> Healing  with Ayurveda</h2>
                    <p>Welcome to Dr. Manish Kothia's Ayurvedic Sanctuary, where ancient wisdom meets modern healing. Our sanctuary offers a serene haven for those seeking natural, holistic wellness solutions. Dive into the profound world of Ayurveda, where personalized care and ancient remedies unite to nurture your body, mind, and spirit. Embrace harmony, vitality, and lasting well-being with our tailored treatments and compassionate guidance.</p>
                   <Button btnText="Begin Your Journey to Balance" bgColor="btn-success"/>
                   </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="">
                        <img src={drs} alt="" className='img-fluid '/>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5"></div>
    </div>
  )
}
