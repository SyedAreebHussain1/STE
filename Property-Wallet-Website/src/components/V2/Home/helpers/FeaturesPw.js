import React from 'react'
import icon from '../../../images/stafficon.png'


//icons
import aiIcon from '../../../images/features/ai.png'
import earnIcon from '../../../images//features/EarnExtraCommission.png'
import sellFasterIcon from '../../../images//features/SellPropertiesFaster.png'
import exclusiveIcon from '../../../images//features/ExclusiveProjects.png'
import hotListingIcon from '../../../images//features/HotListing.png'
import smoothIcon from '../../../images//features/SmoothDigitalTransactions.png'
import completeManagementIcon from '../../../images//features/CompleteRealEstateManagement.png'
import pwLeadIcon from '../../../images//features/PropertyWalletLeadsCenter.png'

const FeaturesPw = () => {
    return (
        <div>
            <section className="wrapper screen-view" style={{ marginTop: "7%", marginBottom: "" }}  data-aos="fade-up">
                <div className="container py-14 py-md-16">
                    <div className="row">
                        <div className="col-xxl-11 mx-auto">
                            <div className="row gx-md-8 gy-10 text-center">
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-yellow rounded-xl mb-4" style={{ margin: '5px' }}>
                                        <img src={aiIcon} className="svg-inject icon-svg solid text-navy" alt="" style={{
                                            width: '2rem',
                                            height: '2rem'
                                        }} />
                                    </div>
                                    <h4 className="fs-20">Property Wallet Integrated with AI</h4>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-green rounded-xl mb-4" style={{ margin: '5px' }}> <img src={earnIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Earn Extra Commission</h4>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-purple rounded-xl mb-4" style={{ margin: '5px' }}> <img src={sellFasterIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Sell Properties 2X Faster</h4>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-pink rounded-xl mb-4" style={{ margin: '5px' }}> <img src={exclusiveIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Exclusive Projects</h4>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-violet rounded-xl mb-4" style={{ margin: '5px' }}> <img src={hotListingIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Hot Listing</h4>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-yellow rounded-xl mb-4" style={{ margin: '5px' }}> <img src={smoothIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg  solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Smooth Digital Transactions</h4>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-blue rounded-xl mb-4" style={{ margin: '5px' }}> <img src={completeManagementIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Complete Real Estate Management</h4>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-4" style={{ margin: '5px' }}> <img src={pwLeadIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Property Wallet Leads Center</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* mobile */}
            <section className="mobile-view" style={{ marginTop: "7%", marginBottom: "" }}>
                <div className="container ">
                    <div className="row">
                        <div className="" style={{}}>
                            <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", alignItems: "center", marginTop: "2px" }}>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div className="svg-bg svg-bg-lg bg-pale-green rounded-xl mb-4" style={{ margin: '' }}> <img src={aiIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Property Wallet Integrated with AI</h4>
                                </div>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div className="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-4" style={{ margin: '' }}> <img src={completeManagementIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Real Estate Management</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", alignItems: "center", marginTop: "2px" }}>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div className="svg-bg svg-bg-lg bg-pale-yellow rounded-xl mb-4" style={{ margin: '' }}> <img src={sellFasterIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Sell Properties 2X Faster</h4>
                                </div>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div className="svg-bg svg-bg-lg bg-pale-purple rounded-xl mb-4" style={{ margin: '' }}> <img src={smoothIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Smooth Digital Transactions</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", alignItems: "center", marginTop: "2px" }}>
                                <div style={{ width: "100%", }}>
                                    <div className="svg-bg svg-bg-lg  bg-pale-blue rounded-xl mb-4" style={{ margin: '' }}> <img src={hotListingIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Hot Lisiting</h4>
                                </div>
                                <div style={{ width: "100%", }}>
                                    <div className="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-4" style={{ margin: '' }}> <img src={exclusiveIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Exclusive Projects</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", alignItems: "center", marginTop: "2px" }}>
                                <div style={{ width: "100%", }}>
                                    <div className="svg-bg svg-bg-lg bg-pale-violet rounded-xl mb-4" style={{ margin: '' }}> <img src={earnIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Earn Extra Commission</h4>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <div className="svg-bg svg-bg-lg bg-pale-purple rounded-xl mb-4" style={{ margin: '' }}> <img src={pwLeadIcon} style={{
                                        width: '2rem',
                                        height: '2rem'
                                    }} className="svg-inject icon-svg solid text-navy" alt="" /> </div>
                                    <h4 className="fs-20">Property Wallet Leads Center</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesPw