import React from 'react'
import { CheckCircleFilled } from '@ant-design/icons'
import selltwo from '../../../images/selltwo.png'
import hotlisting from '../../../images/hotlisting.png'
import recomended from '../../../images/recommended.png'

const PwEasyToUse = () => {
    return (
        <div>
            <section className="wrapper " style={{ marginTop: "7%", marginBottom: "7%" }}>
                <div className="container py-14 py-md-16" style={{ paddingTop: "70px", paddingBottom: "70px" }} >
                    <div className="tab-content mt-6 mt-lg-8" >
                        <div className="tab-pane fade show active" style={{ marginTop: "" }} id="tab2-1">
                            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                                <div className="col-lg-6">
                                    <div className="row gx-md-5 gy-5 align-items-center">
                                        <div className="col-6">
                                            <img className="img-fluid rounded  d-flex ms-auto" src={selltwo} srcSet="./assets/img/photos/sa13@2x.jpg 2x" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img className="img-fluid rounded shadow-lg mb-5" src={hotlisting} srcSet="./assets/img/photos/sa14@2x.jpg 2x" alt="" />
                                            <img className="img-fluid rounded shadow-lg d-flex col-10" src={recomended} srcSet="./assets/img/photos/sa15@2x.jpg 2x" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="mb-3" style={{ lineHeight: '1.35', fontWeight: '700', color: '#343f52', wordSpacing: '0.1rem', letterSpacing: '-.01rem', fontSize: "2.5rem" }}>Property Management & Selling Made Easy</h2>
                                    <p style={{
                                        marginTop: '0', marginBottom: '1rem',
                                        marginBlockStart: '1em',
                                        fontSize: '18px',
                                        marginBlockEnd: '1em',
                                        marginInlineStart: '0px', marginInlineEnd: '0px'
                                    }}>Property Wallet is designed to make your property journey easy and efficient. Our platform offers intuitive features that guide you every step of the way. To begin, sign up for a free account on our mobile app. After logging in, you'll have access to free tools. You can upgrade to a premium account to unlock more features like:</p>
                                    <div className='' style={{ display: "flex" }}>
                                        <ul className=" bullet-bg " style={{ listStyle: 'none' }}>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} />&nbsp; Sell Property 2X Faster</span></li>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} /> &nbsp;Wide Range of Inventories</span></li>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} />&nbsp; Streamlined Transactions</span></li>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} />&nbsp; Agency Management</span></li>
                                        </ul>
                                        <ul className=" bullet-bg " style={{ listStyle: 'none' }}>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} />&nbsp; AI Integrated</span></li>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} />&nbsp; Verified Properties</span></li>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} /> &nbsp;Hot Listnings</span></li>
                                            <li> <span>  <CheckCircleFilled style={{ fontSize: "1rem", color: "#3f78e0", }} />&nbsp; Reports & Analytics</span></li>
                                        </ul>
                                    </div>
                                    <button className="button-24" role="button">View Pricing</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default PwEasyToUse