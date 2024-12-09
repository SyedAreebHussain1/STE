import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import { getRegisteredUsersForPwWebAction, getReportsInfoAction } from '../../../../store/action/traficAction'
import AgentsIcon from '../../../images/ActiveAgentsIcon.png'
import signupIcon from '../../../images/SignupIcon.png'
import downloadIcon from '../../../images/downloadicon.png'
import inventoryIcon from '../../../images/inventoryIcon.png'

const Facts = () => {
    let [signUp, setSignUp] = useState()
    let [download, setDownload] = useState({})
    const dispatch = useDispatch()
    const { getRegisteredUsersForPwWeb, getReportsInfo } = useSelector((state) => state?.trafic)
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    useEffect(() => {
        dispatch(getRegisteredUsersForPwWebAction());
        dispatch(getReportsInfoAction());
    }, [dispatch])
    useEffect(() => {
        if (getRegisteredUsersForPwWeb?.data) {
            setSignUp(getRegisteredUsersForPwWeb)
        }
    }, [getRegisteredUsersForPwWeb])
    useEffect(() => {
        if (getReportsInfo) {
            setDownload(getReportsInfo)
        }
    }, [getReportsInfo])
    return (
        <div className='topspace bottomspace' data-aos="zoom-in">
            <section className="wrapper " style={{ fontSize: '1.05rem', lineHeight: '1.6' }} >
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-0 gy-10 align-items-center flex-reverse-column" >
                        <div className="col-lg-6 order-lg-2 offset-lg-1 grid">
                            <div className="row gx-md-5 gy-5 align-items-center counter-wrapper isotope mt-4per">
                                <div className="item col-md-6">
                                    <div className="card101 shadow-lg">
                                        <div className="card-body101">
                                            <div className="d-flex d-lg-block d-xl-flex flex-row">
                                                <div style={{}}>
                                                    <div className="icon  btn-circle btn-lg btn-soft-purple pe-none mx-auto me-4 mb-lg-3 mb-xl-0" style={{ backgroundColor: "#f0eaf6" }}> <img src={downloadIcon} alt='' style={{ width: "1.7rem", height: '1.7rem' }} /> </div>
                                                </div>
                                                <div>
                                                    <h3 className="counter mb-1" style={{ visibility: 'visible' }}>{download?.['Install events'] ? download?.['Install events'] : 39840}</h3>
                                                    <p className="mb-0" style={{
                                                        marginTop: '0',
                                                        marginBottom: '1rem',
                                                        display: 'block',
                                                        marginBlockStart: '1em',
                                                        marginBlockEnd: '1em',
                                                        fontSize: '16px',
                                                        marginInlineStart: '0px',
                                                        marginInlineEnd: '0px'
                                                    }}>Downloads</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-6">
                                    <div className="card101 shadow-lg">
                                        <div className="card-body101">
                                            <div className="d-flex d-lg-block d-xl-flex flex-row">
                                                <div>
                                                    <div className="icon  btn-circle btn-lg btn-soft-red pe-none mx-auto me-4 mb-lg-3 mb-xl-0" style={{ backgroundColor: "#e1f6f0" }}> <img src={signupIcon} alt='' style={{ width: "1.7rem", height: '1.7rem' }} />  </div>
                                                </div>
                                                <div>
                                                    <h3 className="counter mb-1" style={{ visibility: 'visible' }}>{signUp?.data ? signUp?.data : 6435}</h3>
                                                    <p className="mb-0" style={{
                                                        marginTop: '0',
                                                        marginBottom: '1rem',
                                                        display: 'block',
                                                        marginBlockStart: '1em',
                                                        marginBlockEnd: '1em',
                                                        fontSize: '16px',
                                                        marginInlineStart: '0px',
                                                        marginInlineEnd: '0px'
                                                    }}>Signup</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-6">
                                    <div className="card101 shadow-lg">
                                        <div className="card-body101">
                                            <div className="d-flex d-lg-block d-xl-flex flex-row">
                                                <div>
                                                    <div className="icon  btn-circle btn-lg btn-soft-yellow pe-none mx-auto me-4 mb-lg-3 mb-xl-0" style={{ backgroundColor: "#fef3e4" }}><img src={AgentsIcon} alt='' style={{ width: "1.7rem", height: '1.7rem' }} /> </div>
                                                </div>
                                                <div>
                                                    <h3 className="counter mb-1" style={{ visibility: 'visible' }}>{download?.['Active Device Installs'] ? download?.['Active Device Installs'] : 5789}</h3>
                                                    <p className="mb-0" style={{
                                                        marginTop: '0',
                                                        marginBottom: '1rem',
                                                        display: 'block',
                                                        marginBlockStart: '1em',
                                                        marginBlockEnd: '1em',
                                                        fontSize: '16px',
                                                        marginInlineStart: '0px',
                                                        marginInlineEnd: '0px'
                                                    }}>Active Agents</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-6">
                                    <div className="card101 shadow-lg">
                                        <div className="card-body101">
                                            <div className="d-flex d-lg-block d-xl-flex flex-row">
                                                <div>
                                                    <div className="icon  btn-circle btn-lg btn-soft-aqua pe-none mx-auto me-4 mb-lg-3 mb-xl-0" style={{ backgroundColor: "#eaf3ef" }}> <img src={inventoryIcon} alt='' style={{ width: "1.7rem", height: '1.7rem' }} />  </div>
                                                </div>
                                                <div>
                                                    <h3 className="counter mb-1" style={{ visibility: 'visible' }}>2184</h3>
                                                    <p className="mb-0" style={{
                                                        marginTop: '0',
                                                        marginBottom: '1rem',
                                                        display: 'block',
                                                        marginBlockStart: '1em',
                                                        marginBlockEnd: '1em',
                                                        fontSize: '16px',
                                                        marginInlineStart: '0px',
                                                        marginInlineEnd: '0px'
                                                    }}>Inventories</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h2 className="display-4 mb-3 fontSizing" style={{
                                lineHeight: '1.3', marginTop: '0',
                                marginBottom: '0.5rem',
                                fontWeight: '700',
                                color: '#343f52',
                                wordSpacing: '0.1rem',
                                letterSpacing: "-.01rem",
                                fontSize: "2.5rem"
                            }}>Join Our Growing Community Now</h2>
                            <p className="lead fs-lg " style={{
                                display: 'block',
                                marginBlockStart: '1em',
                                fontSize: '18px',
                                marginBlockEnd: '1em',
                                marginInlineStart: '0px', marginInlineEnd: '0px'
                            }}>Building a Nationwide Community Pakistan's Real Estate Agents Embrace Our App.</p>
                            <p className="mb-0" style={{
                                display: 'block',
                                marginBlockStart: '1em',
                                fontSize: '18px',
                                marginBlockEnd: '1em',
                                marginInlineStart: '0px', marginInlineEnd: '0px'

                            }}>Our software has brought all of Pakistan's real estate agents together on one cutting-edge platform, from north to south and east to west. Join today to simplify property management and get connected to a countrywide agent network that is fostering success everywhere.</p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Facts