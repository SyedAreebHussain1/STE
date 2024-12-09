import React from 'react'
import { StarFilled, CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import imgOne from '../../../images/SoldImg.png'
const ExclusiveReal = ({ exclusiveHeading }) => {
    return (
        <>
            <div className='flex-block exclusive-real-main' >
                <div style={{ padding: "15px" }}>
                    <div><h2 style={{ fontSize: "2.5rem", fontWeight: "bold", letterSpacing: '1px', padding: "7px" }}>{exclusiveHeading}</h2></div>
                    <div className='flex' style={{
                        padding: "3px"
                    }}>
                        <div>
                            <span style={{ padding: "3px" }}> <CheckCircleFilled style={{ fontSize: "24px", color: "#38b45c" }} />  </span> </div> <div> <h5 className='bold l-space' >Verified Properties Only</h5> <p className='l-space' style={{ fontSize: "1.1rem" }}>Guaranteed legitimacy through meticulous verification, ensuring secure transactions and shielding you from scams.</p>
                        </div>
                    </div>
                    <div className='flex' style={{
                        padding: "3px",
                    }}>
                        <div>
                            <span style={{ padding: "3px" }}> <StarFilled style={{ fontSize: "24px", color: "#f8c41c" }} />  </span> </div> <div> <h5 className='bold l-space' >Comprehensive Property Information</h5> <p className='l-space' style={{ fontSize: "1.1rem" }}>Comprehensive property info, including floor plans, amenities, and neighborhood details, empowering confident decisions.</p>
                        </div>
                    </div>
                </div>
                <div className='none' >
                    <img src={imgOne} alt='' />
                </div>
                <div style={{ padding: "15px" }}>
                    <div><h2 className='bold l-space' style={{ fontSize: "2.5rem", color: "white", userSelect: 'none' }}>{exclusiveHeading}</h2></div>
                    <div className='flex' style={{
                        padding: "3px"
                    }}>
                        <div>  <span style={{ padding: "3px" }}> <CheckCircleFilled style={{ fontSize: "24px", color: "#38b45c" }} />  </span> </div> <div> <h5 className='bold l-space' >Diverse Portfolio</h5> <p className='l-space' style={{ fontSize: "1.1rem" }}>Diverse homes thoughtfully matched to your unique needs, budgets, and lifestyles, catering to all demographics.</p> </div>
                    </div>
                    <div className='flex' style={{
                        padding: "3px",
                    }}>
                        <div>  <span style={{ padding: "3px" }}> <ExclamationCircleFilled style={{ fontSize: "24px", color: "" }} />  </span> </div> <div> <h5 className='bold l-space'>Unlock Exclusive Listings</h5> <p className='l-space' style={{ fontSize: "1.1rem" }}>   Access elite projects and luxury properties, seizing advantage in the high-demand market with exceptional features.</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExclusiveReal