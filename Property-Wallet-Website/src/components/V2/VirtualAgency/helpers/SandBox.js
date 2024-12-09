import React, { useEffect } from 'react'
import sandBoxImg from '../../../images/sandboximg.png'
import AOS from "aos";
//icons
import aiIcon from '../../../images/features/ai.png'
import earnIcon from '../../../images//features/EarnExtraCommission.png'
import sellFasterIcon from '../../../images//features/SellPropertiesFaster.png'
import exclusiveIcon from '../../../images//features/ExclusiveProjects.png'
import hotListingIcon from '../../../images//features/HotListing.png'
import smoothIcon from '../../../images//features/SmoothDigitalTransactions.png'
import completeManagementIcon from '../../../images//features/CompleteRealEstateManagement.png'
import pwLeadIcon from '../../../images//features/PropertyWalletLeadsCenter.png'

const SandBox = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <div>
            <section className="wrapper" style={{ marginTop: "7%", marginBottom: "7%" }} data-aos="fade-up">
                <div className="container py-14 py-md-16">
                    <div className="row d-flex align-items-start">
                        <div className="row text-center">
                            <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
                                {/* <img src="https://sandbox.elemisthemes.com/assets/img/svg/doodle3.svg" className="h-11 position-absolute d-none d-lg-block" style={{ top: '-20%', right: '-12%' }} alt="" /> */}
                                <img src="https://sandbox.elemisthemes.com/assets/img/svg/doodle9.svg" className="h-17 position-absolute d-lg-block" style={{ bottom: '5%', left: '-17%' }} alt="" />
                                {/* <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">Why Choose Sandbox?</h2> */}
                                <h3 className="display-3 mb-12 text-center" style={{
                                    lineHeight: '1.3', marginTop: '0',
                                    marginBottom: '0.5rem',
                                    fontWeight: '700',
                                    color: '#343f52',
                                    wordSpacing: '0.1rem',
                                    letterSpacing: "-.01rem",
                                    fontSize: "2.5rem"
                                }}>Unlock the Future of Property Marketing with Our <span className="" style={{ color: "#27a3a3", }}>Property Wallet App</span> </h3>
                            </div>
                        </div>
                        <div className="col-lg-6 position-lg-sticky top-8rem">
                            <figure><img src={sandBoxImg} srcSet="" alt="" /></figure>
                        </div>
                        <div className="col-lg-5 ms-auto">
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg  bg-pale-pink rounded-xl me-5"><img src={aiIcon} className="svg-inject icon-svg solid text-navy" alt="" style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Property Wallet Integrated with AI</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Utilizes artificial intelligence to enhance property management, analysis, and customer interactions.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg bg-pale-green rounded-xl me-5"><img src={earnIcon} style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Earn Extra Commission</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Provides opportunities for agents to earn additional commissions and successful transactions within the platform.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg bg-pale-pink rounded-xl me-5"><img src={sellFasterIcon} style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Sell Properties 2X Faster</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Offers efficient tools and resources to accelerate property sales, reducing listing-to-sale timelines significantly.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg bg-pale-blue rounded-xl me-5"><img src={exclusiveIcon} style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Exclusive Projects</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Showcases exclusive real estate projects, granting users access to unique and high-value opportunities.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg bg-pale-leaf rounded-xl me-5"><img src={hotListingIcon} style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Hot Listing</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Highlights top-performing and high-demand properties, increasing visibility and attracting potential buyers.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg bg-pale-green rounded-xl me-5"><img src={smoothIcon} style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Smooth Digital Transactions</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Facilitates seamless and secure digital transactions for property purchases, minimizing paperwork and complexities.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg bg-pale-leaf rounded-xl me-5"><img src={completeManagementIcon} style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Complete Real Estate Management</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Provides comprehensive tools for real estate agencies to manage listings, transactions, agents, and clients efficiently.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row mb-8">
                                <div>
                                    <div className="svg-bg svg-bg-lg bg-pale-pink rounded-xl me-5"><img src={pwLeadIcon} style={{
                                        width: '1.9rem',
                                        height: '1.9rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /></div>
                                </div>
                                <div>
                                    <h4 className="fs-20">Property Wallet Leads Center</h4>
                                    <p style={{
                                        display: 'block',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Centralizes and organizes leads generated from various sources, optimizing lead management and conversion processes. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SandBox