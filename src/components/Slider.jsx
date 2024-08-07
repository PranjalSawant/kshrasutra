import React from 'react'
import { Title } from './Title'
import img1 from "../assets/akash.jpeg"
import img2 from "../assets/sarvesh.jpeg"
import img3 from "../assets/tbbu.jpeg"
import img4 from '../assets/krishna.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const SliderSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                arrows:false,
              }
            }
          ]
    };
  return (
    <div className="bg-ivory text-green" >
    <div className="py-5">
        <Title title="Testimonials" />
        <div className="container p-md-5">
            <Slider {...settings}>
                <div className="row p-md-5 d-flex">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3>Mr. Akash Bochare</h3>
                            <p className='fst-italic'>
                                "Dr. Manish Kothia's expertise in treating pilonidal sinus and fistula is unparalleled. I had multiple recurrence of both in past three years.His meticulous approach and personalized care led to a swift recovery, relieving me from the discomfort and pain. I highly recommend Dr. Kothia for anyone seeking effective treatment and compassionate care."
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={img1} alt="" className="img-fluid rounded-4 py-2" style={{ height: "300px" }} />
                    </div>
                </div>
                <div className="row p-md-5 d-flex">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3>Mr. Sarvesh Jamdaade</h3>
                            <p className='fst-italic'>
                                "Having Dr. Manish Kothia as my doctor for the treatment of Pilonidal Sinus & Fistula has been an absolute blessing. Their expertise, compassion, and dedication to patient care are truly exceptional. Dr. Kothia listens attentively, explains diagnoses and treatment plans thoroughly, and goes above and beyond to ensure their patients receive the best possible care. I highly recommend Dr. Kothia to anyone seeking assistance for Piles, Pilonidal Sinus & Fistula."
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={img2} alt="" className="img-fluid rounded-4" style={{ height: "300px" }} />
                    </div>
                </div>
                <div className="row p-md-5 d-flex">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3>Mr. Tibbu Varghese</h3>
                            <p className='fst-italic'>
                                "My experience was really good. I was suffering from fistula since  few years. But the treatment given by Ksharasutra was really amazing. Dr Manish khotiya is one of experienced and deep knowledgeable person in this faculty. The entire hospital staff is very cooperative and supportive."
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={img3} alt="" className="img-fluid rounded-4" style={{ height: "300px" }} />
                    </div>
                </div>
                <div className="row p-md-5 d-flex">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3>Krishna Tejas Maniyar</h3>
                            <p className='fst-italic'>
                                "My name is Krishna Tejas Maniyar. I was suffering from severe and multiple piles. Someone I know gave me the reference of Dr. Manish Kothia. I went to Dr. Kothia and, trust me, I felt at that very moment that I was in safe hands. He is extremely talented and the best at his job. I would definitely recommend his name if someone is suffering from piles. If you are consulting Dr. Kothia for your treatment, then forget all your worries. Get treated by him, follow his instructions, and you will get 100% results. I must say he is the best for this treatment. It is difficult to find good doctors, but I found one for this illness, and that's Dr. Manish Kothia. I wish the best health to Dr. Manish Kothia. He should stay fit and fine always so that he can treat more and more patients. Thank you very much, Dr. Manish Kothia.

May the Universe bless you. 😊"
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={img4} alt="" className="img-fluid rounded-4" style={{ height: "300px" }} />
                    </div>
                </div>
            </Slider>
        </div>
    </div>
    <div className="py-md-5"></div>
    <div className="py-md-5"></div>
    </div>
  )
}
