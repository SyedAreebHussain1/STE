import React from 'react'

const CheckBoxCom = ({ handleRadio, objKey }) => {
    return (
        <div className='container ' >
            <div className='rowClass' >
                {objKey.map((val, i) => {
                    return <div className='columnClass' key={i}>
                        <input
                            className="cursor-pointer"
                            type="radio"
                            id={val}
                            defaultChecked={val === "general" ? true : false}
                            onClick={() => handleRadio(val)}
                            name="fav_language"
                            value={val}
                        />&nbsp;&nbsp;
                        <label
                            className="cursor-pointer"
                            htmlFor={val}
                            style={{
                                fontSize: ".9rem",
                                fontWeight: "500",
                                color: "#60697b",
                            }}
                        >
                            {val.charAt(0).toUpperCase() + val.slice(1)}
                        </label>
                    </div>
                })}
            </div>
        </div>
    )
}

export default CheckBoxCom