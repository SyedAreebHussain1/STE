import React from 'react'
// import staff from '../../../images/staff.jpg'

const EsayUsing = () => {
    return (
        <section className="wrapper " style={{ backgroundColor: "rgb(251 251 251)", marginTop: "7%", marginBottom: "7%" }}>
            <div className="container py-14 py-md-16" style={{ paddingTop: "70px", paddingBottom: "70px" }} >
                <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
                    <div className="col-lg-7 position-relative">
                        <div className="shape bg-dot primary rellax w-18 h-18" data-rellax-speed="1" style={{ top: '0', left: '-1.4rem', zIndex: '0' }}></div>
                        <div className="row gx-md-5 gy-5">
                            <div className="col-md-6">
                                <figure className="rounded mt-md-10 position-relative"><img src="https://sandbox.elemisthemes.com/assets/img/photos/g5.jpg" alt="" /></figure>
                            </div>
                            <div className="col-md-6">
                                <div className="row gx-md-5 gy-5">
                                    <div className="col-md-12 order-md-2">
                                        <figure className="rounded"><img src="https://sandbox.elemisthemes.com/assets/img/photos/g6.jpg" alt="" /></figure>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card  text-center counter-wrapper">
                                            <div className="card-body py-11">
                                                <h3 className="counter text-nowrap" style={{ visibility: 'visible', fontSize: '2rem', fontWeight: '500', color: "#343f52" }}>5000+</h3>
                                                <p className="mb-0" style={{
                                                    fontSize: '.8rem', fontWeight: '500', display: 'block',
                                                    marginblockStart: '1em',
                                                    marginBlockEnd: '1em',
                                                    marginInlineStart: '0px',
                                                    marginInlineEnd: '0px',
                                                    color: "#60697b",
                                                    fontSize: '18px',
                                                }}>Satisfied Customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h2 className="display-4 mb-3" style={{
                            lineHeight: '1.3', marginTop: '0',
                            marginBottom: '0.5rem',
                            fontWeight: '700',
                            color: '#343f52',
                            wordSpacing: '0.1rem',
                            letterSpacing: "-.01rem",
                            fontSize: "2.5rem"
                        }}>Let’s Talk</h2>
                        <p className="lead fs-lg" style={{
                            display: 'block',
                            marginBlockStart: '1em',
                            fontSize: '18px',
                            // fontWeight: '500',
                            marginBlockEnd: '1em',
                            marginInlineStart: '0px', marginInlineEnd: '0px'
                        }}>Let's make something great together. We are <span className="underline">trusted by</span> over 5000+ clients. Join them by using our services and grow your business.</p>
                        <p style={{
                            display: 'block',
                            marginBlockStart: '1em',
                            fontSize: '18px',
                            // fontWeight: '500',
                            marginBlockEnd: '1em',
                            marginInlineStart: '0px', marginInlineEnd: '0px'
                        }}>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        {/* <a href="#" className="btn btn-primary rounded-pill mt-2">Join Us</a> */}
                        <button className="button-18" role="button">Join Us</button>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default EsayUsing