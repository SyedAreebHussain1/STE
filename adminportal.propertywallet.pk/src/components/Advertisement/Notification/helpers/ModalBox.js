import { Button } from 'antd'
import React from 'react'

const ModalBox = ({ icon, title, subtitle, btn, onClick }) => {
  return (
    <div className="flex flex-col shadow-md p-5">
      <div>
        <img src={icon} alt="" />
      </div>
      <div className="mt-[18px] mb-[6px]">
        <h2 className="text-lg text-[#667085] font-medium">{title}</h2>
      </div>
      <div className="mb-[18px]">
        <p className="text-sm text-[#858D9D]">{subtitle}</p>
      </div>
      <Button
        className="w-full text-[15px] py-[12px] font-medium bg-[#27A3A3] h-full text-white btn-primary"
        onClick={onClick}
      >
        {btn}
      </Button>
    </div>
  )
}

export default ModalBox
