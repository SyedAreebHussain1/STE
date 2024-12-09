import React from 'react'
import dashborad1 from '../../../images/smart-point/dashboardVerifiction.png'
import pic1 from '../../../images/smart-point/Picture1.png'
import pic2 from '../../../images/smart-point/Picture3.png'

const PropertyTransaction = () => {
    return (
        <>
            <div className='flex-block' style={{ justifyContent: "space-around", alignItems: "center", textAlign: "center", padding: "15px", marginTop: "3%" }}>
                <div style={{ padding: "5px" }}>
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        <p>Seamless Property Documentation <br /> with Property Wallet CRM</p>
                    </div>
                    <div style={{ marginTop: "5%", padding: "30px" }}>
                        <img src={pic1} style={{ width: "270px" }} alt="" />
                    </div>
                    <div style={{ }}>
                        <p style={{ fontSize: "15px", textAlign: "left", padding: "10px", letterSpacing: "1px" }}>
                            Experience hassle-free property documentation with ourintuitive app and web services. Streamline the processfor seamless completion.
                        </p>
                    </div>
                </div>
                <div  style={{ padding: "5px" }}>
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        <p>Property Ownership Authentication with <br /> Property Wallet Verification</p>
                    </div>
                    <div style={{ marginTop: "5%", padding: "10px" }}>
                        <img src={dashborad1} alt="" style={{ width: "105px" }} />
                    </div>

                    <div style={{ padding: "10px" }}>
                        <p style={{ fontSize: "15px", textAlign: "left", padding: "10px", letterSpacing: "1px" }}  >Our easy-to-use biometric app ensures that property ownership facilitated  through Smart Points is not only genuine but also completely secure.</p>
                    </div>
                </div>
                <div style={{ padding: "5px" }}>
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        <span>Smooth and Secure Transactions</span>
                    </div>
                    <div style={{ marginTop: "5%", padding: "30px" }}>
                        <img src={pic2} style={{ width: "270px" }} alt="" />
                    </div>
                    <div style={{ marginTop: "5px", padding: "10px" }}>
                        <p style={{ fontSize: "15px", textAlign: "left", padding: "10px", letterSpacing: "1px" }}>We provide secure payment options, including online methods and bank transactions, to cater to our customers' preferences and convenience.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyTransaction