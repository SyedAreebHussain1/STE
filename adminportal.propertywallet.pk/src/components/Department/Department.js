import React from 'react'
import DepartmentTable from './helpers/DepartmentTable'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import { useModal } from '../../utils/hooks/useModal'
import addIcon from '../assest/icon/addicon.png'
import { Button } from 'antd'

const Department = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggleAdd}
      >
        <img src={addIcon} alt="" />
        <span>Add Department</span>
      </Button>
    </div>
  )
  return (
    <>
      <PageContainer>
        <PageHeader
          title={'Department'}
          subTitle={'All Department'}
          extra={extra}
        />
        <DepartmentTable
          isAddModalVisible={isAddModalVisible}
          toggleAdd={toggleAdd}
        />
      </PageContainer>
    </>
  )
}
export default Department
