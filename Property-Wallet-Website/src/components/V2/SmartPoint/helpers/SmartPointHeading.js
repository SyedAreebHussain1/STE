import React from 'react'

const SmartPointHeading = ({ heading, latterSpacing }) => {
    return (
        <div style={{ justifyContent: "center", display: "flex", marginTop: "6%" }}>
            <div>
                <span style={{ fontSize: "2rem", color: "black", fontWeight: "bold", letterSpacing: { latterSpacing } }}>{heading}</span>
            </div>
        </div>
    )
}

export default SmartPointHeading