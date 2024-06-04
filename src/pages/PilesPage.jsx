import React from 'react'
import Piles1 from '../assets/Stomachache.gif'
import Piles2 from '../assets/fast food.gif'
import Piles3 from '../assets/Healthy habit.gif'
import Piles4 from '../assets/Physical therapy exercise.gif'


export const PilesPage = () => {
    return (
        <div className='bg-ivory'>
            <div className="py-5"></div>
            <div className="container py-5 text-green ">
                <div className='text-center py-5'>
                    <h3 className='fw-bold'>Piles</h3>
                    <p>Piles, also known as hemorrhoids, are swollen veins located in the lower rectum and anus. <br className="d-none d-sm-inline"/>They can be internal or external and may cause discomfort, itching, and bleeding, particularly during bowel movements.<br className="d-none d-sm-inline"/> Piles are often associated with factors like chronic constipation, pregnancy, and straining during bowel movements.</p>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="">
                            <h5 className='fw-bold py-2'>Symptoms : </h5>
                            <ul>
                                <li className='py-1'>Rectal pain, discomfort, or itching, especially during bowel movements.</li>
                                <li className='py-1'>Bright red blood on toilet paper or in the toilet bowl after passing stool.</li>
                                <li className='py-1'>Swelling or lumps around the anus, which may be sensitive or painful to the touch.</li>
                                <li className='py-1'>Mucus discharge from the rectum and a sensation of incomplete bowel evacuation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Piles1} alt="" className='img-fluid rounded-4' />
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Piles2} alt="" className='img-fluid rounded-4' />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="">
                            <h5 className='fw-bold py-2'>Cause and Effect : </h5>
                            <ul>
                                <li className='py-1'>Straining during bowel movements, often due to constipation or diarrhea.</li>
                                <li className='py-1'>Prolonged sitting or standing, obesity, pregnancy, and a low-fiber diet can contribute to increased pressure in the rectal area.</li>
                                <li className='py-1'>Swollen and inflamed veins in the rectum or anus, causing pain, itching, bleeding, and discomfort.</li>
                                <li className='py-1'>In severe cases, hemorrhoids may protrude from the anus and require medical intervention.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="">
                            <h5 className='fw-bold py-2'>Precautions : </h5>
                            <ul>
                                <li className='py-1'>Eat a high-fiber diet to soften stools and reduce straining during bowel movements.</li>
                                <li className='py-1'>Stay hydrated and maintain regular exercise to promote bowel regularity.</li>
                                <li className='py-1'>Avoid sitting or standing for long periods and take breaks to relieve pressure on the rectal area.</li>
                                <li className='py-1'>Use gentle, fragrance-free wipes or soft toilet paper to clean the area after bowel movements.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Piles3} alt="" className='img-fluid rounded-4' />
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Piles4} alt="" className='img-fluid rounded-4' />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="">
                            <h5 className='fw-bold py-2'>Treatment : </h5>
                            <ul>
                                <li className='py-1'><b>Dietary changes:</b> Increasing fiber intake to soften stools and prevent straining during bowel movements.
                                </li>
                                <li className='py-1'><b>Topical treatments:</b> Over-the-counter creams, ointments, or suppositories to reduce pain, itching, and inflammation.
                                </li>
                                <li className='py-1'><b>Sclerotherapy or banding:</b> In-office procedures to shrink hemorrhoids by cutting off their blood supply.
                                </li>
                                <li className='py-1'><b>Rubber band ligation:</b> A procedure where a rubber band is placed around the base of the hemorrhoid to cut off its blood supply, causing it to shrink and fall off.
                                </li>
                                <li className='py-1'><b>Hemorrhoidectomy:</b> Surgical removal of hemorrhoids, usually reserved for severe cases that do not respond to other treatments.

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
