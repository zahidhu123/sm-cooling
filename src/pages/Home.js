import React from 'react'
import Image1 from '../assets/Image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'


function Home() {
    return (
        <>
            {/* Carousel Start */}
            <div className='header-section'>
                <div className="container p-0">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-inner">
                            <div className="carousel-item active interval={1000}">
                                <img src={Image1} className="d-block w-100 c-img" alt="..." />
                            </div>
                            <div className="carousel-item interval={1000}">
                                <img src={Image2} className="d-block w-100 c-img" alt="..." />
                            </div>
                            <div className="carousel-item interval={1000}">
                                <img src={Image3} className="d-block w-100 c-img" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Carousel End */}

            {/* Card section start */}

            {/* <h3 className='heading-title'>Ac Gas leak fix & refilling</h3> */}

            <div className="card-section">
                <div className="container">
                    <h1 className='card-main-title'> Service We Offer</h1>
                    <div className="row pt-3 card-cl-body">
                        <div className="col-lg-4 col-md-6">
                            <div className="card service-card-wrap">
                                <img src={Image1} class="card-img-top card-img-wrap" alt="..." />
                                <div className="card-body card-body-wrap">
                                    <h5 className="card-title">Ac Repair & Services</h5>
                                    <p className="card-text">We provide troubleshoot issues, perform DIY maintenance, and maximize efficiency. Save money on repairs and keep your home comfortably cool with expert advice and practical solutions.</p>
                                    <a href="/" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card service-card-wrap">
                                <img src={Image1} class="card-img-top card-img-wrap" alt="..." />
                                <div className="card-body card-body-wrap">
                                    <h5 className="card-title">Ac Installation</h5>
                                    <p className="card-text">we provide ins and outs of AC installation, from choosing the right unit to professional installation tips. Ensure efficient cooling and enjoy a comfortable home with expert guidance and seamless service.</p>
                                    <a href="/" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-card-wrap">
                                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                                <div className="card-body card-body-wrap">
                                    <h5 className="card-title">Ac Uninstallation</h5>
                                    <p className="card-text">We provide step-by-step instructions for safely removing your air conditioning unit. We also guide best practices for disconnecting, handling. Ensure a smooth process with expert tips for hassle-free uninstallation.</p>
                                    <a href="/" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-card-wrap">
                                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                                <div className="card-body card-body-wrap">
                                    <h5 className="card-title">Ac Gas leak fix & refilling</h5>
                                    <p className="card-text">We check Ac Leak testing with nitrogen, compressed air & soap solution. We also check Technician checks leakage AMP, pressure, air flow, temp, noise level in the end to ensure proper functioning</p>
                                    <a href="/" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-card-wrap">
                                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                                <div className="card-body card-body-wrap">
                                    <h5 className="card-title">Top up Service</h5>
                                    <p className="card-text">Our service is refrigerant boosts your AC's performance. It helps maintain optimal cooling, prevents malfunctions, and ensures your home stays comfortable. Schedule a top-up to keep your AC running smoothly all season.</p>
                                    <a href="/" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card service-card-wrap">
                                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                                <div className="card-body card-body-wrap">
                                    <h5 className="card-title">All Type Service</h5>
                                    <p className="card-text">Explore our wide array of services designed to cater to diverse needs. Whether it's repairs, maintenance, installations, or upgrades, we deliver reliable and efficient solutions for all your requirements.</p>
                                    <a href="/" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home
