import React, { useEffect } from 'react';
import Logo from '../assets/logo2.png';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();

    useEffect(() => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');

        // Close the navbar when a link is clicked
        const handleToggle = () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Trigger toggle to close the navbar
            }
        };

        const navLinks = document.querySelectorAll('.navtg');
        navLinks.forEach(link => link.addEventListener('click', handleToggle));

        // Clean up event listeners
        return () => {
            navLinks.forEach(link => link.removeEventListener('click', handleToggle));
        };
    }, [location]);

    return (
        <nav className="container-fluid navbar navbar-expand-lg fixed-top bg-ivory">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" className="w-100" style={{ height: "auto", width: "auto", maxHeight: "120px", maxWidth: '100%' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex ms-auto">
                        <li className="nav-item px-2 fw-bold">
                            <Link className="nav-link navtg text-green active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-2 fw-bold">
                            <Link className="nav-link navtg text-green" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item px-2 fw-bold">
                            <Link className="nav-link navtg text-green" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item px-2 fw-bold">
                            <Link className="nav-link navtg text-green" to="/form">Wellness Predictor</Link>
                        </li>
                        <li className="nav-item px-2 fw-bold dropdown ">
                            <a className="nav-link text-green dropdown-toggle " href="!#" id="specialtiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Specialties
                            </a>
                            <ul className="dropdown-menu bg-ivory" aria-labelledby="specialtiesDropdown">
                                <li><Link className="dropdown-item navtg" to="/piles">Piles</Link></li>
                                <li><Link className="dropdown-item navtg" to="/fissure">Fissure</Link></li>
                                <li><Link className="dropdown-item navtg" to="/pilonidal">Pilonidal Sinus</Link></li>
                                <li><Link className="dropdown-item navtg" to="/fistula">Fistula</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
