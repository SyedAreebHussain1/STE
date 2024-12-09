import React from "react";


const SixBoxes = (props) => {

    let CustomClass = props.customClass ? props.customClass : "";
    return (
        <>
            <div className={"container " + CustomClass} style={{ border: '', marginLeft: "", marginRight: '', marginTop: "10%" }}
                data-aos="fade-up"
            >
                <div className="bold six-box-block">
                    <div className="six-boxes-name" style={{ backgroundColor: "#053857" }}><div style={{ color: "white" }}> Inventory management</div></div>
                    <div className="six-boxes-name" style={{ backgroundColor: "#ff8b28" }}><div style={{ color: "white" }}>Property documentation</div></div>
                    <div className="six-boxes-name" style={{ backgroundColor: "#053857" }}><div style={{ color: "white" }}>Basic finance</div></div>
                    <div className="six-boxes-name" style={{ backgroundColor: "#ff8b28" }}><div style={{ color: "white" }}>Recovery management</div></div>
                    <div className="six-boxes-name" style={{ backgroundColor: "#053857" }}><div style={{ color: "white" }}>Reporting management</div></div>
                    <div className="six-boxes-name" style={{ backgroundColor: "#ff8b28" }}><div style={{ color: "white" }}>Campaigns Management</div></div>
                </div>

            </div>
        </>
    )
}
export default SixBoxes