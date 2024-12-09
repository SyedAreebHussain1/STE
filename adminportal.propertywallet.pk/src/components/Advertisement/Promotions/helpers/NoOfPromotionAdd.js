import React from 'react'
import filespromotions from '../../../assest/img/filespromotions.png'
import addIcon from '../../../assest/icon/addicon.png'
import { Button } from 'antd'

const NoOfPromotionAdd = ({ handleOnClick, text, buttonText }) => {
  return (
    <>
      <div
        className="flex justify-center items-center "
        style={{ padding: '50px' }}
      >
        <div>
          <div
            className="flex justify-center items-center"
            style={{ textAlign: 'center' }}
          >
            <img style={{ width: '60%' }} src={filespromotions} alt="" />
          </div>
          <div>
            <p className="font-medium text-[23.44px] text-[#14161B]">{text}</p>
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              className="btn-primary py-[20px] px-[35px] flex items-center justify-center text-[#FFFFFF] text-[12px] leading-[18px] font-semibold bg-[#27A3A3] rounded-[8px]  gap-[10px]"
              onClick={handleOnClick}
            >
              <img style={{ filter: 'brightness(10)' }} src={addIcon} alt="" />
              <button>{buttonText}</button>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoOfPromotionAdd
