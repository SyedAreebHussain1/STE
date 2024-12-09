import React from 'react'

const Heading = ({ Heading }) => {
    return (
        <div className="para-service container"
            style={{ marginTop: "" }}  data-aos="fade-up">

            <div className="text-align-center  go-top"  >
                <div className="" style={{
                    lineHeight: '1.3',
                    marginTop: '0',
                    fontWeight: '700',
                    color: '#343f52',
                    wordSpacing: '0.1rem',
                    letterSpacing: "-.01rem",
                    fontSize: "2.5rem",
                }} >
                    {Heading && Heading}
                    {/* <div style={{ display: "flex", justifyContent: "center" }}>
                        <hr style={{ height: "2px", marginTop: "20px", width: "70%" }} />
                    </div> */}
                </div>
                {/* <div className="font-size-1_8rem fastImpossiblysimple bold text-black">Streamlined Customer Verification with Property Wallet Customer Verification App</div> */}
            </div>
        </div>
    )
}

export default Heading