// import { colors } from "@react-spring/shared";
import React, { useEffect } from "react";
import './aboutV2.css'
import AOS from "aos";
import "aos/dist/aos.css";

const DetailsContent = (props) => {
    let content = props.content;
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <div className="details-content-head"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            style={{}}>
            <div className="details-content-padding text-gray-ad" style={{ fontSize: "1.1rem" }}>{content}</div>
            <div className="none" style={{ background: "#27a3a3", width: '100%', height: "225px" }}></div>
        </div>
    )
}
export default DetailsContent