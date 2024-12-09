import React from "react";

const Button = ({ variant, label, className, onClick }) => {
  if (variant === "filled") {
    return (
      <button
        onClick={onClick}
        className={`${className} px-[28px] py-[14px] text-[#6C47FF] bg-[#fff] rounded-[10px] text-lg font-semibold transition hover:bg-[whitesmoke]`}
      >
        {label}
      </button>
    );
  } else if (variant === "filled-inverse") {
    return (
      <button
        onClick={onClick}
        className={`${className} px-[28px] py-[14px] text-[#fff] bg-[#6C47FF] rounded-[10px] text-lg font-semibold transition hover:bg-[whitesmoke] hover:text-[#6C47FF] border border-[#6C47FF]`}
      >
        {label}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${className} px-[28px] py-[14px] border border-[#6C47FF] text-[#6C47FF] bg-[#fff] rounded-[10px] text-lg font-semibold transition hover:bg-[whitesmoke]`}
    >
      {label}
    </button>
  );
};

export default Button;
