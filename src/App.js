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
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>





      {/* <h3 className='heading-title'>Ac Repair & Services</h3> */}
      {/* <h3 className='heading-title'>Ac Installation</h3> */}
      {/* <h3 className='heading-title'>Ac Uninstallation</h3> */}


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
