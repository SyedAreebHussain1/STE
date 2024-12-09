import React from "react"

const SellWithUsMobilize = () => {
    return (
        <div className="tab-content container">
            <div className="tab-pane fade  active show" id="liton_tab_3_1">
                <div style={{ width: "100%", marginLeft: "", border: '2px solid red' }}>
                    <div className="ltn__feature-item bg-white  box-shadow-1 active" style={{ border: '2px solid pink' }}>
                        <div className="ltn__feature-info ">
                            <div
                                className="freature-link-hover text-black"
                                
                            // to="/service-details"
                            >
                                <h1 style={{color:"#053B5C",textAlign:'center'}}>
                                Why Choose Property Wallet CRM
                                </h1>
                            </div>
                            <p className="font-16px bold" style={{color:"black",textAlign:'center'}}>
                            From assessing potential buyers, to promotions and marketing, we’ve got it all covered
                            </p>
                            <div className="row-card">
                                <div className="column-card">
                                    <div className="card-mobilize "
                                    style={{padding:'30px',height:"330px"}}>
                                        <h3 style={{color:"#053B5C"}}>We Provide You Potential Buyers</h3>
                                        <p>Now is the moment to act and capture greater options; let us assist you in getting in front of the right customer. We can guide you to a prosperous future with our unique approach and professional advice.</p>
                                        {/* <p>Some text</p> */}
                                    </div>
                                </div>

                                <div className="column-card">
                                    <div className="card-mobilize " style={{padding:'30px',height:"330px"}}>
                                        <h3 style={{color:"#053B5C"}}> We have a huge amount of dealers</h3>
                                        <p>We are having a large number of real estate dealers can be helpful for a project since it allows them to have a larger reach and a diversified set of agents who can help sell properties to a variety of buyers.</p>
                                        {/* <p>Some text</p> */}
                                    </div>
                                </div>

                                <div className="column-card">
                                    <div className="card-mobilize" style={{padding:'30px',height:"330px"}}>
                                        <h3 style={{color:"#053B5C"}}>We provide you an all-in-one solution</h3>
                                        <p>An all-in-one CRM solution can be very beneficial to projects. Property Wallet CRM includes capabilities such as recovery management, inventory management, basic finance, property documentation, and reporting and analytics.</p>
                                        {/* <p>Some text</p> */}
                                    </div>
                                </div>

                                {/* <div class="column-card">
                                    <div class="card-mobilize">
                                        <h3>Card 4</h3>
                                        <p>Some text</p>
                                        <p>Some text</p>
                                    </div>
                                </div> */}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    // border:'2px solid gray'
                                }}
                                className="btn-wrapper animated"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellWithUsMobilize