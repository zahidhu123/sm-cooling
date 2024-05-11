import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='footer-box' id='contact'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="email-wrapper">
                                <div className="row mb-1">
                                    <div className="col-lg-3 col-md-12 col-sm-12">
                                        <p className="email-para m-0">Email -</p>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12">
                                        <p className="email-address">smcoolingcontroll@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-lg-3 col-md-12 col-sm-12">
                                        <p className="email-para m-0">Phone no. -</p>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12">
                                        <p className="email-address"> +91 9905647330</p>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-lg-3 col-md-12 col-sm-12">
                                        <p className="email-para m-0">Office address-</p>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-12 col-12">
                                        <p className="m-0 email-address"> 1 Jannagar Road Mallik Bazar, Beniapukur Kolkata, West Bengal 700017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="row justify-content-between">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <ul className="link-box">
                                        <li>
                                            <NavLink className="link-item" to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="link-item" to="/service">Service</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <ul className="link-box">
                                        <li>
                                            <NavLink className="link-item" to="/about">About</NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink className="link-item" to="/contact">Contact</NavLink>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
