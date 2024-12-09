import React from 'react'
import servicesImg from '../../images/SellWithUsServices.png'

const SellWithUsServices = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>  <div className="ltn__about-us-area pb-115 go-top" style={{ marginTop: "10%" }} data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 align-self-center">
                    <div className="about-us-img-wrap  about-img-left">
                        {/* <img src={publicUrl + "assets/img/service/11.jpg"} alt="Image" /> */}
                        {/* <img src={servicesImg} alt="Image" /> */}
                    </div>
                </div>
                <div className="col-lg-7 align-self-center">
                    <div className="about-us-info-wrap">
                        <div className="section-title-area ltn__section-title-2--- mb-20">
                            <h6 style={{ color: "#053857",fontSize:"2rem" }}>What services Property Wallet CRM offered</h6>
                            <div>
                                <ul className="">
                                    <li>Social Media Campaigns</li>
                                    <li>Lead Management</li>
                                    <li>Inventory Management</li>
                                    <li>File Management</li>
                                    <li>Biometric Solution</li>
                                    <li>Recovery Management</li>
                                    <li>Report & Analytics</li>
                                    <li>Customer Sales Services</li>
                                    <li>Transfer Management</li>
                                </ul>
                                <div className="">
                                You can easily manage all parts of your property from one convenient location with our advanced and customised platform. We have everything you need to streamline your operations and unlock the full potential of your properties, whether you're a builder, real estate agent, or property manager. Contact us today to learn more about how Property Wallet CRM may assist you in reaching your goals.
                                </div>
                            </div>
                        </div>

                        {/* <div className="btn-wrapper animated">
                        <Link to="/about" className="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</Link>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    )
}

export default SellWithUsServices
