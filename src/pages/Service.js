import React from 'react'

function Service() {

    const serviceCard = [
        {
            sn: 0,
            serviceTitle: "AC Repair and Service",
            itemPrice: "Rs.399/ Visit",
            service1: "Z Pam service 600/-",
            service2: "Dry Service 500,",
            service3: "Wet Service 1250,",
            service4: "Drain Service 450",
            service5: "Leakage Service 700"
        },
        {
            sn: 1,
            serviceTitle: "AC Installation Service",
            itemPrice: "Rs. 1350/ Unit",
            service1: "New AC Instalation / fixing  1350,",
            service2: "Instalation of Indoor unit, 850",
            service3: "Drain Cleaning, 450",
            service4: "Leakage Service 700"
        },
        {
            sn: 2,
            serviceTitle: "AC Uninstallation Service",
            itemPrice: "Rs. 850/ unit",
            service1: "Removing outdoor unit, 450",
            service2: "Removing indoor unit, 450",
        },
        {
            sn: 3,
            serviceTitle: "AC Gas Filling Service",
            itemPrice: "Rs. 1450/ Unit",
            service1: "Full Gas filling RS. 2850/-,",
            service2: "Gas Top Up Rs. 1200/-,",
            service3: "Windows Rs. 2850/-,",
            service4: "Leakage Service 700",
            service5: "Capacitor 1250"
        },
    ]


    return (
        <>
            <div className="service-section">
                <div className="container">
                    <div className="row justify-content-center pt-4">
                        {serviceCard.map((data) => {
                            return <div className="col-lg-5 col-sm-12">
                                <div class="card text-center mb-3">
                                    <div className='card-body service-card-title'>
                                        <h5 class="card-title">{data.serviceTitle}</h5>
                                    </div>
                                    <div class="card-body">
                                        <p class="service-card-text">{data.itemPrice}</p>
                                        <p className='card-para'>{data.service1}</p>
                                        <p className='card-para'>{data.service2}</p>
                                        <p className='card-para'>{data.service3}</p>
                                        <p className='card-para'>{data.service4}</p>
                                        <p className='card-para'>{data.service5}</p>
                                        <a href="#" class="btn service-btn">Contact</a>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
