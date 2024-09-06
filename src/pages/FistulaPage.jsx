import React from 'react'
import Piles1 from '../assets/Stomachache.gif'
import Piles2 from '../assets/fast food.gif'
import Piles3 from '../assets/Healthy habit.gif'
import Piles4 from '../assets/Physical therapy exercise.gif'


export const FistulaPage = () => {
    return (
        <div className='bg-ivory'>
            <div className="py-5"></div>
            <div className="container py-5 text-green ">
                <div className='text-center py-5'>
                    <h3 className='fw-bold'>Anal Fistula</h3>
                    <p> An abnormal tunnel that forms between the anal canal and the skin around the anus, <br className="d-none d-sm-inline" />usually as a result of an untreated abscess. This condition can cause persistent pain, swelling, and drainage of pus,<br className="d-none d-sm-inline" /> often necessitating surgical treatment to fully resolve the issue.</p>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="">
                            <h5 className='fw-bold py-2'>Symptoms : </h5>
                            <ul>
                                <li className='py-1'>Pain: Persistent pain in the anal or rectal area, especially during bowel movements or when sitting.
                                </li>
                                <li className='py-1'>Swelling: Swelling or inflammation around the anus or in the perianal region.</li>
                                <li className='py-1'>Drainage: Discharge of pus, blood, or foul-smelling fluid from an opening (or multiple openings) near the anus.
                                </li>
                                <li className='py-1'>Fever: In some cases, fever may occur if there is an associated infection or abscess formation.
                                </li>
                                <li className='py-1'>Itching: Itching or discomfort in the anal area.

                                </li>
                                <li className='py-1'>Difficulty with bowel movements: Difficulty passing stools or experiencing a sensation of incomplete bowel evacuation.
                                </li>
                                <li className='py-1'>Recurrence: Recurrent abscesses or drainage from the same area despite previous treatment may indicate a persistent fistula.

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
                                <li className='py-1'>Anal fistulas often develop as a result of an infection in an anal gland, leading to the formation of an abscess. Conditions such as Crohn's disease, sexually transmitted infections, and certain cancers can also predispose individuals to develop anal fistulas.
                                </li>
                                <li className='py-1'>Symptoms may include pain, swelling, redness, and drainage of pus or fecal matter from an opening near the anus.</li>
                                <li className='py-1'>Chronic or recurrent infections can lead to complications such as abscess formation, fistula tract enlargement, and scarring of surrounding tissues.
                                </li>
                                <li className='py-1'>Fistulas can significantly impact quality of life, causing discomfort, embarrassment, and difficulty with bowel movements.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="">
                            <h5 className='fw-bold py-2'>Precautions : </h5>
                            <ul>
                                <li className='py-1'>Maintain good anal hygiene by keeping the area clean and dry to prevent infection and irritation.
                                </li>
                                <li className='py-1'>Avoid prolonged sitting or pressure on the anal region to reduce discomfort and prevent exacerbation of symptoms.
                                </li>
                                <li className='py-1'>Seek medical attention if you experience persistent pain, swelling, or drainage from an opening near the anus, as prompt treatment can help prevent complications and promote healing.</li>
                                <li className='py-1'>Follow your healthcare provider's recommendations for treatment, which may include antibiotics, surgical drainage, or surgical removal of the fistula tract, depending on the severity and complexity of the condition.
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
                                <li className='py-1'><b>Insertion of Ksharasutra:</b> A medicated thread (Ksharasutra) is inserted into the fistula, cutting and draining it while promoting healing.
                                </li>
                                <li className='py-1'><b> Periodic Thread Replacement:
                                </b>The thread is changed weekly until the fistula is fully healed, gradually cutting through the tract.
                                </li>
                                <li className='py-1'><b> Minimally Invasive:
                                </b>The procedure is minimally invasive, preserving sphincter muscles and reducing the risk of incontinence.
                                </li>
                                <li className='py-1'><b>Fistulectomy:</b> Similar to fistulotomy, fistulectomy involves surgically removing the entire fistula tract. However, this procedure may be more extensive and involve removing surrounding tissue as well.</li>
                                <li className='py-1'><b>Herbal Support:
                                </b> Ayurvedic herbs may be used alongside to enhance healing and reduce inflammation.

                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
