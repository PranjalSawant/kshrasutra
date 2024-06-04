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
                                <li className='py-1'><b>Incision and Drainage:</b>If there is an associated abscess, the first step is often to drain the abscess surgically to relieve pain and prevent further infection.
                                </li>
                                <li className='py-1'><b>Seton Placement:</b>A seton is a thread-like material (often made of silk or rubber) that is inserted into the fistula tract to keep it open and allow for continuous drainage. This helps prevent the formation of new abscesses and promotes healing.
                                </li>
                                <li className='py-1'><b>Fistulotomy:</b>This surgical procedure involves cutting open the entire length of the fistula tract to remove it completely. It is usually reserved for simple, superficial fistulas that do not involve the sphincter muscles.
                                </li>
                                <li className='py-1'><b>Fistulectomy:</b>Similar to fistulotomy, fistulectomy involves surgically removing the entire fistula tract. However, this procedure may be more extensive and involve removing surrounding tissue as well.</li>
                                <li className='py-1'><b>LIFT Procedure (Ligation of the Intersphincteric Fistula Tract):</b>This minimally invasive procedure involves identifying and ligating (tying off) the internal opening of the fistula tract while preserving the anal sphincter muscles.
                                </li>
                                <li className='py-1'><b>Advancement Flap Repair:</b>In this procedure, tissue from the inside of the rectum is used to cover and close the internal opening of the fistula, promoting healing.

                                </li>
                                <li className='py-1'><b>Fibrin Glue Injection:</b>Fibrin glue is injected into the fistula tract to seal it off and promote healing. This is typically used for low-risk, superficial fistulas.

                                </li>
                                <li className='py-1'><b>Biological Plugs:</b>Biological plugs made from materials such as porcine collagen are sometimes used to seal the internal opening of the fistula and promote healing.</li>
                                <li className='py-1'><b>Antibiotics:</b>Antibiotics may be prescribed to treat or prevent infection, particularly if there is an associated abscess or if surgery is performed.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
