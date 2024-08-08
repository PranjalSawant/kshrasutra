import React from 'react'
import MapComponent from '../components/MapComponent'
import { Title } from '../components/Title';
export const ContactUsPage = () => {
  return (
    <div className='bg-ivory'>
            <div className="py-5"></div>
            <div className="py-5"></div>
      <div className='text-green'>
        <Title title="Contact Us" />
        </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-7">
            <MapComponent />
          </div>
          <div className="col">
            <div className="d-flex align-items-center text-green ps-5">
              <div>
                <h4 className='fw-semibold pt-4'><i>Clinic Timings </i></h4>
                <p><span className='fw-semibold'>Monday - Saturday</span><br/> 10:00 AM - 1:00 PM <br/> 4:30 PM - 6:00 PM</p>
                <p className='fw-semibold'>Sunday Closed</p>
                <h4 className='fw-semibold pt-4'><i>Phone Number</i></h4>
                <p>(+91) 9324499061</p>
                <h4 className='fw-semibold pt-4'><i>For Appointments and Consultations</i></h4>
                <p className='mb-0'>Kshara Sutra Hospital</p>
                <p className='mb-0'>Near N.L High School</p>
                <p>Malad West, Mumbai 400064</p>
                <h4 className='fw-semibold pt-4'><i>For Surgeries and Procedures</i></h4>
                <p className='mb-0'>Shri Bala Hanuman Mat. & Surgical Hospital</p>
                <p className='mb-0'>C-113, Lancelot Building, S.V Road, Opp. Kalyan Jewellers, Near Vijay Sales</p>
                <p>Borivali West, Mumbai 400092</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4"></div>

    </div>
  )
}
