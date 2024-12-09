import React from "react"

const SellWithUsChoose = ({ heading, content, peraContent }) => {
    return (
        <>
            <div
                className="para-service container" style={{ marginTop: "7%", border: '', width: "" }} >
                <div className="text-align-center margin-bottom-60px go-top" data-aos="flip-up" >
                    <h6 className="text-Align-center bold" style={{ color: "#053857", fontSize: "2rem" }}>
                        {heading}
                    </h6>
                    <p className="font-16px bold text-Align-center" style={{ color: "black" }}>
                        {content}
                    </p>
                </div>
                <div className="row ltn__custom-gutter--- justify-content-center">
                    {peraContent.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-sm-6 col-12 go-top"
                                data-aos="flip-right"
                            >
                                <div className="ltn__feature-item">
                                    {/* <Link to={itemv.path}><img src={itemv.img} className="width-300px" /></Link> */}
                                    <div
                                        className="ltn__feature-info marginTop-15px"
                                    >

                                        <h3 style={{ color: "#053857" }}>{item.heading}</h3>

                                        <p className="font-15px text-gray-ad">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default SellWithUsChoose