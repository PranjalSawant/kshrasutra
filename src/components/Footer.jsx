import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-green.png'
export const Footer = () => {
    return (
        <footer className="bg-green text-ivory p-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 pb-5">
                        <Link to='/'><img src={logo} alt="" style={{height:"120px"}} /></Link>
                        <p className='py-4'>At Kshara Sutra Hospital, we specialize in the holistic treatment of anorectal<br/> diseases using ancient Ayurvedic practices. Led by Dr. Manish Kothia, a renowned Ayurvedic practitioner,<br/> our clinic offers personalized care and natural remedies to ensure the best outcomes for our patients.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 py-3">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li className='py-1'><Link to="/" className='text-ivory text-decoration-none'>Home</Link></li>
                            <li className='py-1'><Link to="/" className='text-ivory text-decoration-none'>About Us</Link></li>
                            <li className='py-1'><Link to="/" className='text-ivory text-decoration-none'>Contact Us</Link></li>
                            <li className='py-1'><Link to="/piles" className='text-ivory text-decoration-none'>Piles (Hemorrhoids)</Link></li>
                            <li className='py-1'><Link to="/fissure" className='text-ivory text-decoration-none'>Anal Fissure</Link></li>
                            <li className='py-1'><Link to="/fistula" className='text-ivory text-decoration-none'>Anal Fistula</Link></li>
                            <li className='py-1'><Link to="/pilonidal" className='text-ivory text-decoration-none'>Pilonidal Sinus</Link></li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-6 py-3">
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                            <li className='py-1'><Link to="/" className='text-ivory text-decoration-none'>Facebook</Link></li>
                            <li className='py-1'><Link to="/" className='text-ivory text-decoration-none'>Instagram</Link></li>
                            <li className='py-1'><Link to="/" className='text-ivory text-decoration-none'>Twitter</Link></li>
                            <li className='py-1'><Link to="/piles" className='text-ivory text-decoration-none'>LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 py-3">
                        <h4>Reach Out To Us</h4>
                        <p>123 Main Street<br />City, State<br />Email: info@example.com<br />Phone: 123-456-7890</p>
                    </div>
                    <div className="col-lg-3 col-md-6 py-3">
                        <h4>Disclaimer</h4>
                        <p>The information about anorectal diseases provided on this website is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a medical condition.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

