import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import DiscountTable from './helpers/DiscountTable'
import { Button } from 'antd'
import addIcon from '../assest/icon/addicon.png'
import { useModal } from '../../utils/hooks/useModal'

const Discount = () => {
  const [isAddModalVisible, toggle] = useModal()
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggle}
      >
        <img src={addIcon} alt="" />
        <span>Add Discount Code</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title="Discount"
        subTitle="Manage all your discount codes"
        extra={extra}
      />
      <DiscountTable isAddModalVisible={isAddModalVisible} toggle={toggle} />
    </PageContainer>
  )
}

export default Discount
