import { Button } from 'antd'
import React from 'react'
import addIcon from '../../../../components/assest/icon/addicon.png'
const OwnerRequestPageHead = ({ title, subTitle, onClick, onClickAssign }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="pb-[20px] md:pb-[55px]">
          <h2 className="text-[18px] text-textcolor2 font-semibold">{title}</h2>
          <p className="text-textColor">{subTitle}</p>
        </div>

        <div style={{ display: 'flex' }}>
          <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={onClickAssign}
          >
            <img src={addIcon} alt="" />
            <span>Assign Investors</span>
          </Button>

          <Button
            className="ml-3 btn-primary py-[15px] px-[30px] flex items-center justify-center text-[#FFFFFF] text-[12px] leading-[18px] bg-[#27A3A3] rounded-[8px]  gap-[10px]"
            onClick={onClick}
          >
            <img style={{ filter: 'brightness(10)' }} src={addIcon} alt="" />
            <span>Add new Owner</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default OwnerRequestPageHead
