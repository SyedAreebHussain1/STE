import { Button, Divider, Form } from 'antd'
import React, { useEffect } from 'react'
import AddAreaDetails from './helpers/AddAreaDetails'
import ArrowRight from '../../../../../assest/icon/arrow-right.png'
import UploadExcelInventory from './helpers/UploadExcelInventory'
import { generatePlotDetailUpdateExelApi } from '../../../../../../redux/api/Project/ProjectInventory'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const AvailableInventoryStep = ({ next, prev, current }) => {
  const updateProjectInventoryStepOne = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (current === 3) {
      generatePlotDetailUpdateExelApi(
        dispatch,
        updateProjectInventoryStepOne?.data?.data?.id
      )
    }
  }, [current])
  return (
    <Form
      name="add-single-property-step-four"
      className="projects-form"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      //   form={form}
    >
      <AddAreaDetails current={current} />
      <Divider />
      <UploadExcelInventory />
      <div className="flex gap-[20px] justify-end pt-[35px]">
        <Button
          className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          //   disabled={current === 0}
          onClick={prev}
        >
          <span>Back</span>
        </Button>
        <Button
          className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          // disabled={current === steps.length - 1}
          onClick={next}
          htmlType="submit"
        >
          <span>Next</span>
          <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
        </Button>
      </div>
    </Form>
  )
}

export default AvailableInventoryStep
