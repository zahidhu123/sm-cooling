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
        </>
    )
}

export default Home
