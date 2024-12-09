import React from 'react'
import checkSign from '../../../../../assest/icon/check.png'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const FinishStep = ({ prev }) => {
  const navigate = useNavigate()
  function onFinish() {
    navigate('/property-wallet-inventory/project-details')
  }
  return (
    <>
      <div style={{ padding: '100px', backgroundColor: '#fff' }}>
        <div className="flex justify-center items-center">
          <div className="h-[90px] w-[90px] bg-[#27A3A3] rounded-[50%] relative">
            {' '}
            <div
              className="absolute top-[50%] left-[50%]"
              style={{
                transform: 'translateX(-50%) translateY(-50%)',
              }}
            >
              <img src={checkSign} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[23.44px] text-[#000000] font-medium mt-[2%]">
            Your Inventory Has Been Added Successfully!
          </p>
        </div>
      </div>
      <div className="flex gap-[20px] justify-end pt-[35px]">
        {/* <Button
          className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          onClick={prev}
        >
          <span>Back</span>
        </Button> */}
        <Button
          className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          onClick={onFinish}
        >
          <span>Go to Home</span>
        </Button>
      </div>
    </>
  )
}

export default FinishStep
