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
                                <li className='py-1'><b>Application of Ksharasutra:</b> A medicated thread (Ksharasutra) is carefully inserted into the pilonidal sinus tract. The thread, coated with herbal alkaline substances, gradually works to drain the sinus and cut through the tract, promoting healing from within.

</li>
                                <li className='py-1'><b>Periodic Thread Change:
                                </b> The Ksharasutra thread is periodically changed (usually every week) to ensure continuous drainage and healing. This process is repeated until the entire sinus tract is healed, which typically takes a few weeks.

</li>
                                <li className='py-1'><b>Herbal Support and Care:
                                </b> Ayurvedic herbs may be used alongside the Ksharasutra treatment to enhance healing. Herbal ointments and oral medications may be prescribed to reduce inflammation and promote tissue repair.
                                </li>
                                <li className='py-1'><b>Minimal Invasive Procedure:
                                </b> The Ksharasutra technique is minimally invasive, causing less pain and scarring compared to traditional surgery. It also significantly reduces the chances of recurrence.

</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
