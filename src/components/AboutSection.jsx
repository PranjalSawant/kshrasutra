import React from 'react'
import { Title } from './Title'
import { Button } from './Button'
import Abt from '../assets/abt.jpg'
export const AboutSection = () => {
    return (
        <div className='bg-green text-ivory p-5'>
            <div className="py-5"></div>
            <Title title="What do we do?" />
            <div className='container py-5'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='pb-lg-0 pb-5'>
                            <img src={Abt} className='img-fluid w-100 rounded-4' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center lh-base fs-md-5 px-lg-5">At Dr. Manish Kothia's Ayurvedic Sanctuary, we believe that true healing begins with addressing the root cause of imbalance, rather than merely treating symptoms. Our comprehensive approach to wellness encompasses personalized consultations, therapeutic treatments, herbal remedies, lifestyle guidance, and more. Whether you seek relief from chronic ailments, rejuvenation of mind and body, or simply a path to greater vitality, our team is dedicated to crafting a unique journey toward optimal health and well-being. Experience the transformative power of Ayurveda and embark on a path to holistic harmony with us.</div>
                </div>
            </div>
            <div className="d-flex">
                <div className="mx-auto">
                    <Button btnText="Learn More About Our Approach" bgColor="btn-outline-success"></Button>
                </div>
            </div>
        </div>
    )
}
