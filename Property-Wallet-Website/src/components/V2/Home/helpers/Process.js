import React from 'react'
import providing from '../../../images/providing1.png'
// import hour24 from "../../../images/24serives01.png"
import unlock from "../../../images/Unlock.png"
import verifiedProperties from "../../../images/VerifiedProperties.png"
import diverse from "../../../images/Diverse.png"
import comprehensive from "../../../images/Comprehensive.png"

const Process = () => {
    return (
        <div>
            <section className="wrapper topspace bottomspace" >
                <div className="container py-14 py-md-16">
                    <div className="row text-center">
                        <div className="col-md-10 col-lg-7 mx-auto position-relative">
                            <img src="https://sandbox.elemisthemes.com/assets/img/svg/doodle5.svg" className="w-15 position-absolute d-none d-lg-block" data-delay="1800" style={{ bottom: '-70%', right: '5%' }} alt="" />
                            {/* <img src="https://sandbox.elemisthemes.com/assets/img/svg/doodle5.svg" className="h-15 position-absolute d-none d-lg-block" data-delay="1800" style={{ top: '-40%', left: '-5%' }} alt="" /> */}
                            <h3 className="display-3 mb-8 px-xl-6" style={{
                                lineHeight: '1.3',
                                marginTop: '0',
                                fontWeight: '700',
                                color: '#343f52',
                                wordSpacing: '0.1rem',
                                letterSpacing: "-.01rem",
                                fontSize: "2.5rem",
                            }}>Providing Exclusive <span style={{color:"#27a3a3"}}> Real Estate </span> Inventory</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-11 mx-auto">
                            <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
                                <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                                    <figure className="mx-auto"><img src={providing} alt="" /></figure>
                                </div>
                                <div className="w-100 d-lg-none"></div>
                                <div className="col-md-6 col-lg-4 order-lg-first">
                                    <div className="mb-8">
                                        <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"> <img width={'50px'} src={verifiedProperties} alt='' /> </span>
                                        <h4 className="fs-20" style={{
                                            marginTop: '0',
                                            marginBottom: '0.5rem',
                                            fontWeight: '700',
                                            color: '#343f52',
                                            wordSpacing: '0.1rem',
                                            letterSpacing: '-.01rem',
                                        }}>Verified Properties Only</h4>
                                        <p className="mb-0 px-xl-7" style={{
                                            display: 'block',
                                            marginBlockStart: '1em',
                                            fontSize: '18px',
                                            marginBlockEnd: '1em',
                                            marginInlineStart: '0px', marginInlineEnd: '0px'
                                        }}>Guaranteed legitimacy through meticulous verification, ensuring secure transactions and shielding you from scams.</p>
                                    </div>
                                    <div>
                                        <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"><img width={'50px'} src={comprehensive} alt='' /></span>
                                        <h4 className="fs-20" style={{
                                            marginTop: '0',
                                            marginBottom: '0.5rem',
                                            fontWeight: '700',
                                            color: '#343f52',
                                            wordSpacing: '0.1rem',
                                            letterSpacing: '-.01rem',
                                        }}>Comprehensive Property Information</h4>
                                        <p className="mb-0 px-xl-7 " style={{
                                            display: 'block',
                                            marginBlockStart: '1em',
                                            fontSize: '18px',
                                            marginBlockEnd: '1em',
                                            marginInlineStart: '0px', marginInlineEnd: '0px'
                                        }}>Comprehensive property info, including floor plans, amenities, and neighborhood details, empowering confident decisions.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="mb-8">
                                        <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"><img width={'50px'} src={diverse} alt='' /></span>
                                        <h4 className="fs-20" style={{
                                            marginTop: '0',
                                            marginBottom: '0.5rem',
                                            fontWeight: '700',
                                            color: '#343f52',
                                            wordSpacing: '0.1rem',
                                            letterSpacing: '-.01rem',
                                        }}>Diverse Portfolio</h4>
                                        <p className="mb-0 px-xl-7" style={{
                                            display: 'block',
                                            marginBlockStart: '1em',
                                            fontSize: '18px',
                                            marginBlockEnd: '1em',
                                            marginInlineStart: '0px', marginInlineEnd: '0px'
                                        }}>Diverse homes thoughtfully matched to your unique needs, budgets, and lifestyles, catering to all demographics.</p>
                                    </div>
                                    <div>
                                        <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"><img width={'50px'} src={unlock} alt='' /></span>
                                        <h4 className="fs-20" style={{
                                            marginTop: '0',
                                            marginBottom: '0.5rem',
                                            fontWeight: '700',
                                            color: '#343f52',
                                            wordSpacing: '0.1rem',
                                            letterSpacing: '-.01rem',
                                        }}>Unlock Exclusive Listings</h4>
                                        <p className="mb-0 px-xl-7" style={{
                                            display: 'block',
                                            marginBlockStart: '1em',
                                            fontSize: '18px',
                                            marginBlockEnd: '1em',
                                            marginInlineStart: '0px', marginInlineEnd: '0px'
                                        }}>Access elite projects and luxury properties, seizing advantage in the high-demand market with exceptional features.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Process