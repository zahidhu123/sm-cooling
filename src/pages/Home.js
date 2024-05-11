import React from 'react'
import Image1 from '../assets/Image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Imageac1 from '../assets/ac-image1.jpg'
import Imageac2 from '../assets/ac-image2.webp'
import Imageac3 from '../assets/ac-image3.jpg'
import Imageac4 from '../assets/ac-image4.jpg'
import Imageac5 from '../assets/ac-image5.jpg'
import Imageac6 from '../assets/ac-image6.webp'
import Gallery0 from '../assets/gallery0.jpg'
import Gallery1 from '../assets/gallery1.png'
import Gallery2 from '../assets/gallery2.jpeg'
import Gallery3 from '../assets/gallery3.jpg'
import Gallery4 from '../assets/gallery4.jpg'
import Gallery5 from '../assets/gallery5.jpg'


function Home() {

    const cardImage = [
        {
            image: Imageac1,
            title: "Ac Repair & Service",
            text: "We provide troubleshoot issues, perform DIY maintenance, and maximize efficiency. Save money on repairs and keep your home comfortably cool with expert advice and practical solutions."
        },
        {
            image: Imageac2,
            title: "Ac Installation",
            text: "we provide ins and outs of AC installation, from choosing the right unit to professional installation tips. Ensure efficient cooling and enjoy a comfortable home with expert guidance and seamless service."
        },
        {
            image: Imageac3,
            title: "Ac Uninstallation",
            text: "We provide step-by-step instructions for safely removing your air conditioning unit. We also guide best practices for disconnecting, handling. Ensure a smooth process with expert tips for hassle-free uninstallation."
        },
        {
            image: Imageac4,
            title: "Ac Gas leak fix & refilling",
            text: "We check Ac Leak testing with nitrogen, compressed air & soap solution. We also check Technician checks leakage AMP, pressure, air flow, temp, noise level in the end to ensure proper functioning"
        },
        {
            image: Imageac5,
            title: "Top up Service",
            text: "Our service is refrigerant boosts your AC's performance. It helps maintain optimal cooling, prevents malfunctions, and ensures your home stays comfortable. Schedule a top-up to keep your AC running smoothly all season."
        },
        {
            image: Imageac6,
            title: "All Type Service",
            text: "Explore our wide array of services designed to cater to diverse needs. Whether it's repairs, maintenance, installations, or upgrades, we deliver reliable and efficient solutions for all your requirements."
        }
    ]

    const gallery = [
        {
            sn: 0,
            image: Gallery0
        },
        {
            sn: 1,
            image: Gallery1
        },
        {
            sn: 2,
            image: Gallery2
        },
        {
            sn: 3,
            image: Gallery3
        },
        {
            sn: 4,
            image: Gallery4
        },
        {
            sn: 5,
            image: Gallery5
        }
    ]



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
                        {cardImage.map((data) => {
                            return <div className="col-lg-4 col-md-6">
                                <div className="card service-card-wrap">
                                    <img src={data.image} class="card-img-top card-img-wrap" alt="..." />
                                    <div className="card-body card-body-wrap">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.text}</p>
                                        <a href="/" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>

            <div className='card-section'>
                <div className="container">
                    <h1 className='card-main-title'>Gallery</h1>
                    <div className="row">
                        {gallery.map((data) => {
                            return <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='gallery-img-wrap'>
                                    <img src={data.image} className='gallery-img' alt="" />
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
