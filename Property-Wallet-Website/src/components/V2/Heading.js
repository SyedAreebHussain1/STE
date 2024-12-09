import React from 'react'

const Heading = ({ heading, bottomContent }) => {
    return (
        <>
            <div className='container' style={{textAlign:"center" , marginTop:"5%"}}>
                <h6 style={{ color: "#053857", fontSize: "2rem" }}>{heading} </h6>
                <p style={{fontSize:"1rem"}}>{bottomContent}</p>
            </div>
        </>
    )
}

export default Heading