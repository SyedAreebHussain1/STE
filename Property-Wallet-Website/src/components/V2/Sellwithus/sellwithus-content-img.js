import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import SecondBanner from "../../images/SecondBanner.m4v"

class ContentImg extends Component {
    render() {
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <>  <div className="ltn__about-us-area pb-115 go-top" style={{ marginTop: "10%" }} data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                            <div className="about-us-img-wrap  about-img-left">
                                {/* <img src={publicUrl + "assets/img/service/11.jpg"} alt="Image" /> */}
                                <video style={iOS ? { width: '100%' } : { width: '100%' }} className='videoTag' playsInline autoPlay loop muted>
                                    <source src={SecondBanner} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="about-us-info-wrap">
                                <div className="section-title-area ltn__section-title-2--- mb-20">
                                    <h1 className="section-title" style={{ color: "#053857" }}>What includes in Property Wallet CRM<span></span></h1>
                                    <div>
                                      
                                        <ul className="">
                                            <li>Inventory Management</li>
                                            <li>Property documentation</li>
                                            <li>Basic Finance</li>
                                            <li>Recovery Management</li>
                                            <li>Reporting Management</li>
                                            <li>Campaigns Management</li>
                                        </ul>
                                        <div className="">
                                            Unlock the potential of your projects with Property Wallet CRM! Our all-in-one CRM solution makes it easier for you to manage recovery, inventory, finance, campaigns, documents and analytics. Get a clear overview of your project and stay on top of progress with powerful reporting and analytics. Say goodbye to tedious manual processes - save valuable time and money with Property Wallet CRM.
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
    }
}

export default ContentImg