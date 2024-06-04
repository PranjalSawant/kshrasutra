import React from 'react'
import { Title } from './Title'
import { Button } from './Button'
import Predict from '../assets/predict.png'
import { Link } from 'react-router-dom'
export const PredictionSection = () => {
    return (
        <div className="bg-green text-ivory py-5">
            <div className="py-5">
                <Title title="Discover Your Personalized Wellness Path" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <p className='p-md-5 fs-5 fw-semibold text-ivory'>Uncover your unique health profile with our Ayurvedicprediction form. Answer a few simple questions to receive personalized recommendations for your wellness journey.<br /> <br /> Whether you're seeking to balance your doshas, improve your digestive health, or find natural solutions to chronic issues, our prediction form is your first step toward holistic well-being. Begin your journey with us and unlock the secrets to a healthier, happier you.</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <img src={Predict} alt="" className='img-fluid ' />
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="m-auto">
                        <Link to="/form"><Button btnText="Start Your Wellness Assessment" bgColor="btn-outline-success"></Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
