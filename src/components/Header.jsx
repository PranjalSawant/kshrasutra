import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
            <nav className="container-fluid navbar navbar-expand-lg fixed-top bg-ivory">
                <div className="container ">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" className='w-100' style={{height:"100px"}}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex ms-auto">
                            <li className="nav-item px-2 fw-bold ">
                                <Link className="nav-link text-green active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item px-2 fw-bold ">
                                <Link className="nav-link text-green" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item px-2 fw-bold ">
                                <Link className="nav-link text-green" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item px-2 fw-bold ">
                                <Link className="nav-link text-green" to="/form">Wellness Predictor</Link>
                            </li>
                            <li className="nav-item px-2 fw-bold  dropdown">
                                <a className="nav-link text-green dropdown-toggle" href="!#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Specialties
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item text-ivory" to="/piles">Piles</Link></li>
                                    <li><Link className="dropdown-item text-ivory" to="/fissure">Fissure</Link></li>
                                    <li><Link className="dropdown-item text-ivory" to="/pilonidal">Pilonidal Sinus</Link></li>
                                    <li><Link className="dropdown-item text-ivory" to="/fistula">Fistula</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
