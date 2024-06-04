import React from 'react'
import Piles1 from '../assets/Stomachache.gif'
import Piles2 from '../assets/fast food.gif'
import Piles3 from '../assets/Healthy habit.gif'
import Piles4 from '../assets/Physical therapy exercise.gif'


export const PilonidalPage = () => {
    return (
        <div className='bg-ivory'>
            <div className="py-5"></div>
            <div className="container py-5 text-green ">
                <div className='text-center py-5'>
                    <h3 className='fw-bold'>Pilonidal Sinus</h3>
                    <p> A small tunnel or cavity in the skin near the tailbone, <br className="d-none d-sm-inline"/>often filled with hair and debris. It is prone to infection and abscess formation, <br className="d-none d-sm-inline"/>leading to significant pain, swelling, and sometimes discharge. Treatment often involves surgical intervention.</p>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="">
                            <h5 className='fw-bold py-2'>Symptoms : </h5>
                            <ul>
                                <li className='py-1'>Pain, swelling, or tenderness in the lower back or buttock area.
</li>
                                <li className='py-1'>Redness or inflammation around a small opening or pit in the skin.
</li>
                                <li className='py-1'>Discharge of pus or blood from the affected area.
</li>
                                <li className='py-1'>Recurrent abscesses or cysts in the sacrococcygeal region.
</li>
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
                                <li className='py-1'>Blocked hair follicles, often exacerbated by friction and pressure in the buttock area.
</li>
                                <li className='py-1'>Ingrown hairs, poor hygiene, excessive hair growth, and genetic predisposition are contributing factors.
</li>
                                <li className='py-1'>Formation of a small tunnel or pocket beneath the skin, leading to pain, swelling, and sometimes infection</li>
                                <li className='py-1'>Recurrence is common if not properly treated or if risk factors persist.
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
                        <li className='py-1'>Maintain good hygiene, especially in the buttock area.
</li>
                        <li className='py-1'>Keep the area clean and dry to prevent bacterial growth.</li>
                        <li className='py-1'>Avoid prolonged sitting or pressure on the affected area.
</li>
                        <li className='py-1'>Seek medical attention if symptoms persist or worsen.</li>
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
                                <li className='py-1'><b>Incision and drainage:</b> If the sinus is infected, a healthcare provider may need to make an incision to drain pus and debris from the abscess.
</li>
                                <li className='py-1'><b>Antibiotics:</b> In cases of infection, antibiotics may be prescribed to treat the bacterial infection.
</li>
                                <li className='py-1'><b>Laser hair removal or shaving:</b> To prevent recurrence, hair removal methods may be used to reduce hair in the affected area.</li>
                                <li className='py-1'><b>Surgical excision:</b> For recurrent or chronic cases, surgical removal of the sinus tract and surrounding tissue may be necessary.
</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
