import React, { useEffect, useRef } from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const Button = ({ variant, label, className, disabled, loading = false, ...rest }) => {
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);
  const OutlinedButtonRef = useRef()
  const filledInverseRef = useRef()

  function filledOutlinedHover(){
    OutlinedButtonRef.current.style.color = `#${getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor}`
  }
  function filledOutlinedLeave(){
    OutlinedButtonRef.current.style.color = `#000`
  }

  useEffect(() => {
    if(getAgencyDetails?.data && filledInverseRef.current){
      filledInverseRef.current.style.color = `#${getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor}`
    }
  }, [getAgencyDetails, filledInverseRef])
  
  if (variant === "filled") {
    return (
      <button
        {...rest}
        disabled={disabled || loading}
        className={`${className} px-5 py-3 md:px-[28px] md:py-[14px] text-[#000] rounded-[10px] text-base md:text-lg font-semibold transition hover:bg-[whitesmoke]`}
        style={{
          backgroundColor: disabled || loading ? "rgb(0 0 0 / 11%)" : "#fff"
        }}
      >
        <Spin spinning={loading} className="mr-2" />
        {label}
      </button>
    );
  } else if (variant === "filled-inverse") {
    return (
      <button
        {...rest}
        disabled={disabled || loading}
        className={`${className} px-5 py-3 md:px-[28px] md:py-[14px] text-[#000] rounded-[10px] text-base md:text-lg font-semibold transition hover:bg-[whitesmoke] hover:text-[#000] border`}
        style={{
          backgroundColor: disabled || loading ? "rgb(0 0 0 / 11%)" : getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
            ? `#${getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor}`
            : "#6C47FF",
        }}
        ref={filledInverseRef}
      >
        <Spin spinning={loading} className="mr-2" />
        {label}
      </button>
    );
  }
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      ref={OutlinedButtonRef}
      onMouseEnter={filledOutlinedHover}
      onMouseLeave={filledOutlinedLeave}
      className={`${className} px-5 py-3 md:px-[28px] md:py-[14px] border rounded-[10px] text-base md:text-lg font-semibold transition hover:bg-[whitesmoke]`}
      style={{
        borderColor: getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          ? `#${getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor}`
          : "#6C47FF",
        color: "#000",
        backgroundColor: disabled || loading ? "rgb(0 0 0 / 11%)" : "#fff"
      }}
    >
      <Spin spinning={loading} className="mr-2" />
      {label}
    </button>
  );
};

export default Button;
