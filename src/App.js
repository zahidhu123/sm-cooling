import './App.css';
import Imageac1 from './assets/ac-image1.jpg';
import Imageac2 from './assets/ac-image2.webp';
import Imageac3 from './assets/ac-image3.jpg';
import Imageac4 from './assets/ac-image4.jpg';
import Imageac5 from './assets/ac-image5.jpg';
import Imageac6 from './assets/ac-image6.webp';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Footer from './component/Footer';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>



      {/* Carousel End */}

      {/* card section */}

      {/* <h3 className='heading-title'>Ac Repair & Services</h3> */}
      {/* <h3 className='heading-title'>Ac Installation</h3> */}
      {/* <h3 className='heading-title'>Ac Uninstallation</h3> */}
      {/* <div className="card-section mt-5">
        <div className="container">
          <h1 className='card-main-title'> Service We Offer</h1>
          <div className="row pt-3">
            <div className="col-lg-4 col-md-6">

              <div className="card service-card-wrap">
                <img src={Image1} class="card-img-top card-img-wrap" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ac Repair & Services</h5>
                  <p className="card-text">We provide troubleshoot issues, perform DIY maintenance, and maximize efficiency. Save money on repairs and keep your home comfortably cool with expert advice and practical solutions.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              
              <div className="card service-card-wrap">
                <img src={Image2} class="card-img-top card-img-wrap" alt=".." />
                <div className="card-body">
                  <h5 className="card-title">Ac Installation</h5>
                  <p clasName="card-text">we provide ins and outs of AC installation, from choosing the right unit to professional installation tips. Ensure efficient cooling and enjoy a comfortable home with expert guidance and seamless service.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              
              <div className="card service-card-wrap">
                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ac Uninstallation</h5>
                  <p className="card-text">We provide step-by-step instructions for safely removing your air conditioning unit. We also guide best practices for disconnecting, handling. Ensure a smooth process with expert tips for hassle-free uninstallation.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className='heading-title'>Ac Gas leak fix & refilling</h3>
              <div className="card">
                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ac Gas leak fix & refilling</h5>
                  <p className="card-text">We check Ac Leak testing with nitrogen, compressed air & soap solution. We also check Technician checks leakage AMP, pressure, air flow, temp, noise level in the end to ensure proper functioning</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className='heading-title'>Top up Service</h3>
              <div className="card">
                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Top up Service</h5>
                  <p className="card-text">Our service is refrigerant boosts your AC's performance. It helps maintain optimal cooling, prevents malfunctions, and ensures your home stays comfortable. Schedule a top-up to keep your AC running smoothly all season.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className='heading-title'>All Type Service</h3>
              <div className="card">
                <img src={Image3} class="card-img-top card-img-wrap" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">All Type Service</h5>
                  <p className="card-text">Explore our wide array of services designed to cater to diverse needs. Whether it's repairs, maintenance, installations, or upgrades, we deliver reliable and efficient solutions for all your requirements.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Gallery section start */}
      {/* <div className="image-section">
        <div className="container">
          <h1 className='gallery-wrap'>Gallery</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className='gallery-img-wrap'>
                <img src={Imageac1} alt="" className='gallery-img' />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='gallery-img-wrap'>
                <img src={Imageac2} alt="" className='gallery-img' />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='gallery-img-wrap'>
                <img src={Imageac3} alt="" className='gallery-img' />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='gallery-img-wrap'>
                <img src={Imageac4} alt="" className='gallery-img' />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='gallery-img-wrap'>
                <img src={Imageac5} alt="" className='gallery-img' />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='gallery-img-wrap'>
                <img src={Imageac6} alt="" className='gallery-img' />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Gallery section end */}

      {/* <div className="container">
        <div className='address-box'>
          <div className='Address-wrap'>
            <h1>Address</h1>
            <p className='address-subtitle'>1 Jannagar Road Mallik Bazar, Beniapukur Kolkata, West Bengal 700017</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
