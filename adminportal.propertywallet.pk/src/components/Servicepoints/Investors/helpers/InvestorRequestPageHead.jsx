import { Button } from 'antd'
import React from 'react'
import addIcon from '../../../../components/assest/icon/addicon.png'
const InvestorRequestPageHead = ({ title, subTitle, onClick }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="pb-[20px] md:pb-[55px]">
          <h2 className="text-[18px] text-textcolor2 font-semibold">{title}</h2>
          <p className="text-textColor">{subTitle}</p>
        </div>

        <div>
          <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={onClick}
          >
            <img src={addIcon} alt="" />
            <span>Add new Investor</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default InvestorRequestPageHead
