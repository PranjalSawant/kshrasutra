import React from 'react'
import { Title } from './Title'
import img1 from "../assets/akash.jpeg"
import img2 from "../assets/sarvesh.jpeg"
import img3 from "../assets/tbbu.jpeg"
import img4 from '../assets/krishna2.jpg'
import img5 from '../assets/testimonial5.jpg'
import img6 from '../assets/testimonial6.jpg'
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
                            <h3>Ms. Krishna Tejas Maniyar</h3>
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
                <div className="row p-md-5 d-flex">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3>Mr. Rakesh Shah</h3>
                            <p className='fst-italic'>
                                "Dr. Manish Kothia is not only an amazing doctor but also a warm and approachable person. He is an ace in Kshara Sutra treatment. I approached him after 2 failed surgeries for my complex fistula at a reputed hospital. This hospital provides excellent non-surgical treatments which ensures permanent treatment without any complications. Awesome treatment with high patience. He treats his patients like he would his own family and with great care. I have never seen such a positive & playful attitude in a doctor."
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={img5} alt="" className="img-fluid rounded-4" style={{ height: "300px" }} />
                    </div>
                </div>
                <div className="row p-md-5 d-flex">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3>Mr. Rohit Mhapsekar</h3>
                            <p className='fst-italic'>
                                "I cannot thank Dr. Manish Kothia enough for giving me a second chance at life. After 1.5 years of pain and three unsuccessful surgeries, I finally found relief through Dr. Kothia’s Kshara Sutra treatment for my 26 cm long fistula. His positive energy and motivation were crucial in helping me and my family through this challenging time.

My struggle began in August 2021 with a perianal abscess in Shanghai, where I underwent my first surgery. Despite multiple follow-ups, the core issue persisted, causing severe discomfort. After relocating to Mumbai, I had two more surgeries using laser techniques, but the problem remained unresolved. On my birthday, I was told I needed another surgery, which was devastating.

Desperate for a solution, I visited Dr. Manish Kothia on a friend's recommendation. He thoroughly explained my condition and assured me that the Kshara Sutra treatment would bring relief. Although the process was painful, his kindness, expertise, and the support of his staff made all the difference. I only wish I had found him sooner.

I highly recommend Dr. Kothia to anyone suffering from a fistula. He truly is an incredible doctor."
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={img6} alt="" className="img-fluid rounded-4" style={{ height: "300px" }} />
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
