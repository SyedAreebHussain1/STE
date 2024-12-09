import React, { useState } from 'react'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import silverIcon from '../../../images/silverIcon.png'
import goldIcon from '../../../images/goldIcon.png'
import freeIcon from '../../../images/freeIcon.png'
import basicIcon from '../../../images/basicIcon.png'

const PricingHandle = () => {
    const [isRadio, setIsRadio] = useState('')
    const styleGreen = {
        color: "#2b832b",
        position: "relative", top: '-3px', right: "3px"
    }
    const styleRed = {
        color: "#e15454",
        position: "relative", top: '-3px', right: "3px"
    }
    const handleRadio = (e) => {
        setIsRadio(e.target.value)
    }
    function percentage(partialValue, totalValue) {
        return Math.round((100 * partialValue) / totalValue) + '%';
    }
    console.log('basic', isRadio === 'Yearly' ? percentage(2500 * 12 - 16000, 2500 * 12) : isRadio === '3 Months' ? percentage(2500 * 3 - 6000, 2500 * 3) : isRadio === 'Half Yearly' ? percentage(2500 * 6 - 10000, 2500 * 6) : 2500)
    console.log('silver', isRadio === 'Yearly' ? percentage(6500 * 12 - 40000, 6500 * 12) : isRadio === '3 Months' ? percentage(6500 * 3 - 15000, 6500 * 3) : isRadio === 'Half Yearly' ? percentage(6500 * 6 - 25000, 6500 * 6) : 6500)
    console.log('gold', isRadio === 'Yearly' ? percentage(12500 * 12 - 80000, 12500 * 12) : isRadio === '3 Months' ? percentage(12500 * 3 - 30000, 12500 * 3) : isRadio === 'Half Yearly' ? percentage(12500 * 6 - 48000, 12500 * 6) : 12500)
    // {isRadio === 'Yearly' ? '16,000' : isRadio === '3 Months' ? '6,000' : isRadio === 'Half Yearly' ? '10,000' : '2,500'}
    return (
        <div style={{ marginTop: "5%", marginBottom: "5%" }}>
            <section className="wrapper ">
                <div className="container py-14 py-md-16">
                    {/* <div className="row">
                        <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
                            <h3 className="display-4 mb-15 mb-md-6 px-lg-10">We offer great prices, premium products and quality service for your business.</h3>
                        </div>
                    </div> */}
                    <div className="pricing-wrapper position-relative">
                        <div className="shape bg-dot primary rellax w-16 h-18" data-rellax-speed="1" style={{ top: '2rem', right: '-2.4rem' }}></div>
                        <div className="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block" data-rellax-speed="1" style={{ bottom: '0.5rem', left: '-2.5rem' }}></div>
                        <div>
                            <form action="" style={{
                                width: "50%", display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}>
                                <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                                    <div className='cursor-pointer'>
                                        <div>
                                            <label className='cursor-pointer' htmlFor="monthly" style={{
                                                fontSize: '.9rem',
                                                fontWeight: '500',
                                                color: '#60697b',
                                            }}>Monthly</label>
                                        </div>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <div>
                                            <label className='cursor-pointer' htmlFor="threeMonths" style={{
                                                fontSize: '.9rem',
                                                fontWeight: '500',
                                                color: '#60697b',
                                                // marginTop: 'auto',
                                                // marginBottom: '0.25rem',
                                            }}>3 Months</label>
                                        </div>
                                    </div>
                                    <div className='cursor-pointer' >
                                        <div>
                                            <label className='cursor-pointer' htmlFor="halfYearly" style={{
                                                fontSize: '.9rem',
                                                fontWeight: '500',
                                                color: '#60697b',
                                                // marginTop: 'auto',
                                                // marginBottom: '0.25rem',
                                            }}>Half Yearly</label>
                                        </div>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <div>
                                            <label className='cursor-pointer' htmlFor="yearly" style={{
                                                fontSize: '.9rem',
                                                fontWeight: '500',
                                                color: '#60697b',
                                                // marginTop: 'auto',
                                                // marginBottom: '0.25rem',
                                            }}>Yearly</label>
                                        </div>
                                    </div>

                                </div>
                                <div style={{
                                    width: "100%",
                                    border: '',
                                    padding: '5px',
                                    borderRadius: '25px'
                                }} className='four-sides-with-same-color'>
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <input className='cursor-pointer' type="radio" id="monthly" defaultChecked onChange={handleRadio} name="fav_language" value="Monthly" />
                                        </div>
                                        <div >
                                            <input className='cursor-pointer' type="radio" id="threeMonths" onChange={handleRadio} name="fav_language" value="3 Months" />
                                        </div>
                                        <div>
                                            <input className='cursor-pointer' type="radio" id="halfYearly" onChange={handleRadio} name="fav_language" value="Half Yearly" />
                                        </div>
                                        <div>
                                            <input className='cursor-pointer' type="radio" id="yearly" onChange={handleRadio} name="fav_language" value="Yearly" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="row gy-6 mt-3 mt-md-5">
                            <div className="col-md-6 col-lg-3">
                                <div className="pricing card text-center">
                                    <div className="card-body">
                                        <img src={freeIcon} style={{
                                            width: "5rem",
                                            height: "5rem"
                                        }} className="svg-inject icon-svg icon-svg-md text-primary mb-3" alt="" />
                                        <h4 className="card-title">Free</h4>
                                        <div className="prices text-dark">
                                            <div className="price price-show"><span className="price-currency">PKR</span><span className="price-value">0</span></div>
                                        </div>
                                        <ul className=" bullet-bg bullet-soft-primary mt-7 mb-8 text-start " style={{ listStyle: "none" }} >
                                            <li style={{ fontSize: '1rem', }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Payment Plan Calculator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sale & Quotation Maker </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Brochure Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Post Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Business Card Creator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Inventory Managements </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Commission Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Staff Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Finalize sale </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Sales Order Request </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Sales Target </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> PW Inventory</span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Cross-listing </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Leads Center </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Listings </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Hot listings </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Commission  </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> User Limit  </span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="pricing card text-center">
                                    <div className="card-body">
                                        <img src={basicIcon} style={{
                                            width: "5rem",
                                            height: "5rem"
                                        }} className="svg-inject icon-svg icon-svg-md text-primary mb-3" alt="" />
                                        <h4 className="card-title">Basic</h4>
                                        <div className="prices text-dark">
                                            <div className="price price-show"><span className="price-currency">PKR</span><span className="price-value">{isRadio === 'Yearly' ? '16,000' : isRadio === '3 Months' ? '6,000' : isRadio === 'Half Yearly' ? '10,000' : '2,500'}</span><span className="price-duration">{isRadio === 'Yearly' ? 'yearly' : isRadio === '3 Months' ? '3mon' : isRadio === 'Half Yearly' ? 'Half yearly' : 'mon'}</span></div>
                                        </div>
                                        <ul className=" bullet-bg bullet-soft-primary mt-7 mb-8 text-start " style={{ listStyle: "none" }}  >
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>{isRadio === 'Yearly' ? 3 * 12 : isRadio === '3 Months' ? 3 * 3 : isRadio === 'Half Yearly' ? 3 * 6 : 3} Listings</strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>2 User Limit </strong>  </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>Cross-listing </strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>PW Inventory</strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Payment Plan Calculator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sale & Quotation Maker </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Brochure Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Post Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Business Card Creator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Inventory Managements </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Commission Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Staff Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Finalize sale </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sales Order Request </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sales Target </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Leads Center </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Commission  </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CloseCircleFilled style={styleRed} /><span><strong></strong> Hot listings </span></li>
                                        </ul>
                                        {/* <a href="#" className="btn btn-primary rounded-pill">Choose Plan</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 popular">
                                <div className="pricing card text-center">
                                    <div className="card-body">
                                        <img src={silverIcon} style={{
                                            width: "5rem",
                                            height: "5rem"
                                        }} className="svg-inject icon-svg icon-svg-md text-primary mb-3" alt="" />
                                        <h4 className="card-title">Silver</h4>
                                        <div className="prices text-dark">
                                            <div className="price price-show"><span className="price-currency">PKR</span><span className="price-value">{isRadio === 'Yearly' ? '40,000' : isRadio === '3 Months' ? '15,000' : isRadio === 'Half Yearly' ? '25,000' : '6,500'}</span><span className="price-duration">{isRadio === 'Yearly' ? 'yearly' : isRadio === '3 Months' ? '3mon' : isRadio === 'Half Yearly' ? 'Half yearly' : 'mon'}</span></div>
                                        </div>
                                        <ul className=" bullet-bg bullet-soft-primary mt-7 mb-8 text-start" style={{ listStyle: "none" }} >
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>{isRadio === 'Yearly' ? 10 * 12 : isRadio === '3 Months' ? 10 * 3 : isRadio === 'Half Yearly' ? 10 * 6 : 10} Listings</strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>4 User Limit </strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong> Cross-listing</strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong> PW Inventory</strong></span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>{isRadio === 'Yearly' ? 12 : isRadio === '3 Months' ? 3 : isRadio === 'Half Yearly' ? 6 : 1} Hot listings</strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Payment Plan Calculator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sale & Quotation Maker </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Brochure Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Post Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Business Card Creator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Inventory Managements </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Commission Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Staff Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Finalize sale </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sales Order Request </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sales Target </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Leads Center </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Commission  </span></li>
                                        </ul>
                                        {/* <a href="#" className="btn btn-primary rounded-pill">Choose Plan</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 offset-md-3 col-lg-3 offset-lg-0">
                                <div className="pricing card text-center">
                                    <div className="card-body">
                                        <img src={goldIcon} style={{
                                            width: "5rem",
                                            height: "5rem"
                                        }} className="svg-inject icon-svg icon-svg-md text-primary mb-3" alt="" />
                                        <h4 className="card-title">Gold</h4>
                                        <div className="prices text-dark">
                                            <div className="price price-show"><span className="price-currency">PKR</span><span className="price-value">{isRadio === 'Yearly' ? '80,000' : isRadio === '3 Months' ? '30,000' : isRadio === 'Half Yearly' ? '48,000' : '12,500'}</span> <span className="price-duration">{isRadio === 'Yearly' ? 'yearly' : isRadio === '3 Months' ? '3mon' : isRadio === 'Half Yearly' ? 'Half yearly' : 'mon'}</span></div>
                                        </div>
                                        <ul className=" bullet-bg bullet-soft-primary mt-7 mb-8 text-start" style={{ listStyle: "none" }} >
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>{isRadio === 'Yearly' ? 20 * 12 : isRadio === '3 Months' ? 20 * 3 : isRadio === 'Half Yearly' ? 20 * 6 : 20} Listings</strong></span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>8 User Limit </strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong> Cross-listing</strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong> PW Inventory </strong></span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong>{isRadio === 'Yearly' ? 24 : isRadio === '3 Months' ? 6 : isRadio === 'Half Yearly' ? 12 : 2} Hot listings</strong> </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Payment Plan Calculator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sale & Quotation Maker </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Brochure Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Post Generator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Business Card Creator </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Inventory Managements </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Commission Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Staff Management </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Finalize sale </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sales Order Request </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Sales Target </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Leads Center </span></li>
                                            <li style={{ fontSize: '1rem' }} className=' text-dark'><CheckCircleFilled style={styleGreen} /><span><strong></strong> Commission  </span></li>
                                        </ul>
                                        {/* <a href="#" class="btn btn-primary rounded-pill">Choose Plan</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default PricingHandle