import React from 'react'
import Piles1 from '../assets/Stomachache.gif'
import Piles2 from '../assets/fast food.gif'
import Piles3 from '../assets/Healthy habit.gif'
import Piles4 from '../assets/Physical therapy exercise.gif'


export const FissurePage = () => {
    return (
        <div className='bg-ivory '>
            <div className="py-5"></div>
            <div className="container py-5 text-green ">
                <div className='text-center py-5'>
                    <h3 className='fw-bold'>Anal Fissure</h3>
                    <p>A small, painful tear in the anal lining caused by passing hard or large stools,<br className="d-none d-sm-inline"/> resulting in sharp pain and bleeding during bowel movements. Chronic constipation or diarrhea can exacerbate this condition, <br className="d-none d-sm-inline"/>often requiring both medical treatment and lifestyle changes for healing.</p>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="">
                            <h5 className='fw-bold py-2'>Symptoms : </h5>
                            <ul>
                                <li className='py-1'>Sharp pain or burning sensation during or after bowel movements, lasting for several hours.</li>
                                <li className='py-1'>Visible tears or cracks in the skin around the anus, often accompanied by bleeding.</li>
                                <li className='py-1'>Itching, irritation, or spasms of the anal sphincter muscle.</li>
                                <li className='py-1'>Difficulty passing stools or a feeling of constipation, sometimes alternating with episodes of diarrhea.</li>
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
                                <li className='py-1'>Passage of hard or large stools, leading to tears or fissures in the lining of the anus.</li>
                                <li className='py-1'>Chronic constipation or diarrhea, childbirth, and inflammatory bowel diseases can also contribute to anal fissures.</li>
                                <li className='py-1'>Pain and bleeding during bowel movements, accompanied by itching and discomfort.</li>
                                <li className='py-1'>Anal fissures can become chronic if not properly treated, leading to ongoing pain and difficulty with bowel movements.
</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="">
                        <h5 className='fw-bold py-2'>Precautions : </h5>
                    <ul>
                        <li className='py-1'>Maintain a high-fiber diet and drink plenty of water to prevent constipation.
</li>
                        <li className='py-1'>Practice good anal hygiene, and avoid excessive wiping or harsh cleansers.</li>
                        <li className='py-1'>Use stool softeners or topical ointments as recommended by a healthcare professional to promote healing.
</li>
                        <li className='py-1'>Avoid straining during bowel movements and consider using a stool or footstool to elevate your feet while on the toilet to ease passage.
</li>
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
                                <li className='py-1'><b>Topical ointments or creams: </b>Over-the-counter or prescription creams containing calcium channel blockers or nitroglycerin to relax the anal sphincter and promote healing.
</li>
                                <li className='py-1'><b>Sitz baths:</b> Soaking the anal area in warm water for 10-15 minutes several times a day to relieve pain and promote healing.</li>
                                <li className='py-1'><b>Dietary changes:</b> Increasing fiber intake and drinking plenty of water to soften stools and reduce strain during bowel movements.
</li>
                                <li className='py-1'><b>Botulinum toxin injection:</b> Injections into the anal sphincter to relax the muscle and promote healing in chronic fissures.
</li>
<li className='py-1'><b>Surgical sphincterotomy:</b> In severe or chronic cases, a surgical procedure to cut the internal anal sphincter muscle to reduce spasm and promote healing.

</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
