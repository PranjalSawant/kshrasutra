import React from 'react'
import { Title } from './Title'
import ks from '../assets/kshar-sutra-therapy.jpg'
export const KsharasutraInfo = () => {
    return (
        <div className='container'>
            <Title title="What is Kshara Sutra?" />
            <div className="row">
                <div className="col-lg-6 d-flex">
                    <img src={ks} alt="" className='w-100 img-fluid rounded-3 m-auto'/>
                </div>
                <div className="col-lg-6">
                <p >Ksharsutra Therapy is a specialized Ayurvedic treatment for anorectal conditions like piles, fistula-in-ano, and fissures. It uses a medicated thread coated with herbal extracts to cut and heal affected tissues without surgery. This minimally invasive procedure promotes natural healing, has a low recurrence rate, and allows for a quick recovery, often without the need for hospitalization. Ideal for those seeking a safe, effective, and natural treatment option for anorectal diseases.</p>
            <div className=''>
                <p className='fst-italic'>चतुर्विधोऽर्शसां साधनोपायः । तद्यथा- भेषजं क्षारोऽग्निः शस्त्रमिति । तत्र अचिरकालजा- तान्यत्पदोषलिङ्गोपद्रवाणि भेषजसाध्यानि, मृदुप्रसृतावगाढान्युच्छ्रितानि क्षारेण, कर्कशस्थिरपृथु - कठिनान्यग्निना, तनुमूलान्युच्छ्रितानि क्लेदवन्ति च शस्त्रेण। तत्र भेषजसाध्यानामर्शसामदृश्यानां च भेषजं भवति, क्षाराग्निशस्त्रसाध्यानां तु विधानमुच्यमानमुपधारय ।। ३ ।। </p > 
                <p className=''>Explanation - There are four types of treatments for herpes. For example, salt is a medicine, and fire is a weapon. There are the troubles of the sex of the foot which have arisen for a short time, the soft spreading and deep are raised by salt, the harsh, stable, broad - hard are raised by fire, and the thin roots are raised and wetted by weapons. There is a remedy for those who are able to get medicines and for those who are not able to see, but for those who are able to get salt, fire and weapons.</p>
            </div>
                </div>
            </div>
            
  
        </div>
    )
}
