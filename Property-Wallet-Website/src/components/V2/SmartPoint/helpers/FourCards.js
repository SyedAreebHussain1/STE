import React, { useEffect } from 'react'
import AOS from "aos";
import imgIcon from '../../../images/15001.png'
const FourCards = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <div className="container-four-main "
            data-aos="fade-up"
        >
            <div className="card1 w-25per" style={{ backgroundColor: "#27a3a3" }}>
                <div className='img-shadow'>
                    <img src={imgIcon} alt="Person" className="card1__image " />
                </div>
                <div className="grid-container" style={{ width: "100%", padding: '15px', marginTop: "15px" }}>
                    <div>
                        <div className='text-center'>
                            <h5 style={{ fontWeight: "bold", color: "white" }}>
                                Providing Exclusive Real Estate Inventory
                            </h5>
                        </div>
                        <ul style={{ fontSize: "15px", fontWeight: "" }}>
                            <li>We offer a handpicked selection of the best properties available.</li>
                            <li>We work with top developers and sellers to give you access to exclusive listings.</li>
                            <li>Get high-demand properties that others might miss out on.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card1 w-25per" >
                <div className='img-shadow'>
                    <img src={imgIcon} alt="Person" className="card1__image " />
                </div>
                <div className="grid-container" style={{ width: "100%", padding: '15px', marginTop: "15px" }}>
                    <div>
                        <div className='text-center'>
                            <h5 style={{ fontWeight: "bold" }}>
                                Streamlined & Secure Property Transactions
                            </h5>
                        </div>
                        <ul style={{ fontSize: "15px", fontWeight: "", color: "black" }}>
                            <li>Our process is smooth and secure, making buying and selling easy.</li>
                            <li>Our team helps with all the necessary paperwork.</li>
                            <li>We make sure the property ownership is legitimate, protecting you from risks.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card1 w-25per" style={{ backgroundColor: "#27a3a3" }}>
                <div className='img-shadow'>
                    <img src={imgIcon} alt="Person" className="card1__image " />
                </div>
                <div className="grid-container" style={{ width: "100%", padding: '15px', marginTop: "15px" }}>
                    <div>
                        <div className='text-center'>
                            <h5 style={{ fontWeight: "bold", color: "white" }}>
                                Marketing Support & Staff Training
                            </h5>
                        </div>
                        <ul style={{ fontSize: "15px" }}>
                            <li>We support sellers with effective marketing strategies.</li>
                            <li>Our partners receive training to succeed in the real estate market.</li>
                            <li>Your success is our success, and we are here to help you grow.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card1 w-25per" style={{ width: "25%" }}>
                <div className='img-shadow'>
                    <img src={imgIcon} alt="Person" className="card1__image " />
                </div>
                <div className="grid-container" style={{ width: "100%", padding: '15px', marginTop: "15px" }}>
                    <div>
                        <div className='text-center'>
                            <h5 style={{ fontWeight: "bold" }}>
                                Unlock New Income Opportunity
                            </h5>
                        </div>
                        <ul style={{ fontSize: "15px", fontWeight: "", color: "black" }}>
                            <li>Earn attractive commissions by connecting buyers and sellers.</li>
                            <li>Tap into the thriving real estate market for new income streams.</li>
                            <li>A fantastic opportunity for merchandisers to expand their business.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourCards