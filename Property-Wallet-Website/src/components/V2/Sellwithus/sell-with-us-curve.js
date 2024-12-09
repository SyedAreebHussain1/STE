import React from "react"
import { Link } from "react-router-dom";

const CurveCustom = () => {
    return (
        <>
        <div className="curved-custom-main-Div">
            <div className="upper-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,101.3C480,85,600,139,720,186.7C840,235,960,277,1080,277.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
            <div className="mainDiv">
                <h1>Start your journy</h1>
                <div
                                        style={{
                                            // display: "flex",
                                            // justifyContent: "center",
                                            // marginTop: '-20px'
                                            marginLeft: '1rem'
                                        }}
                                        className="btn-wrapper animated border"
                                    >
                                        <Link
                                            to=""
                                            className="theme-btn-1 btn btn-effect-1 learnMore"
                                        >
                                            {/* {learnMore.toUpperCase()} */}
                                            Download PDF
                                        </Link>
                                    </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,101.3C480,85,600,139,720,186.7C840,235,960,277,1080,277.3C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div>
        </>
    )
}
export default CurveCustom