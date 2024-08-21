import React from 'react'
import img1 from "../assets/achievement/Documents, achievements & certifcates_23.jpg"
import img2 from "../assets/achievement/Documents, achievements & certifcates_25.jpg"
import img3 from "../assets/achievement/Documents, achievements & certifcates_35.jpg"
import img4 from '../assets/achievement/Documents, achievements & certifcates_36.jpg'
import img5 from '../assets/achievement/Documents, achievements & certifcates_38.jpg'
import img6 from "../assets/achievement/Documents, achievements & certifcates_39.jpg"
import img7 from "../assets/achievement/Documents, achievements & certifcates_40.jpg"
import img8 from '../assets/achievement/Documents, achievements & certifcates_42.jpg'
import img9 from '../assets/achievement/Documents, achievements & certifcates_44.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Achievements = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false,
    //             }
    //         }
    //     ]
    // };
    return (
        <div className="bg-ivory text-green" >
            <div className="py-5">
                <div className="container p-md-5">
                    {/* <Slider {...settings}>
                        <div className="row p-md-5 d-flex">
                            <img src={img1} alt="" className="img-fluid rounded-4 py-2" style={{ height: "300px" }} />
                        </div>
                        <div className="row p-md-5 d-flex">
                            <img src={img2} alt="" className="img-fluid rounded-4 py-2" style={{ height: "300px" }} />
                        </div>
                        <div className="row p-md-5 d-flex">
                            <img src={img3} alt="" className="img-fluid rounded-4 py-2" style={{ height: "300px" }} />
                        </div>
                        <div className="row p-md-5 d-flex">
                            <img src={img4} alt="" className="img-fluid rounded-4 py-2" style={{ height: "300px" }} />
                        </div>
                        <div className="row p-md-5 d-flex">
                            <img src={img5} alt="" className="img-fluid rounded-4 py-2" style={{ height: "300px" }} />
                        </div>
                    </Slider> */}
                    <div class="parent">
                    <div class="div1"> <img src={img1} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/> </div>
                    <div class="div2">  <img src={img2} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/> </div>
                    <div class="div3">  <img src={img3} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/> </div>
                    <div class="div4"> <img src={img4} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/> </div>
                    <div class="div5"> <img src={img5} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/>  </div>
                    <div class="div6"> <img src={img6} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/>  </div>
                    <div class="div7"> <img src={img7} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/>  </div>
                    <div class="div8"> <img src={img8} alt="" className="img-fluid rounded-4 py-2"  style={{ height: "300px" }}/>  </div>
                    <div class="div9"> <img src={img9} alt="" className="img-fluid rounded-4 py-2" style={{ height: "300px" }}/>  </div>
                    </div>
                </div>
            </div>
            <div className="py-md-5"></div>
            <div className="py-md-5"></div>
        </div>
    )
}
