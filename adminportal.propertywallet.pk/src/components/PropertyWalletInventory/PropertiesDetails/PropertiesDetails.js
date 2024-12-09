import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

// icon
import addIcon from '../../../components/assest/icon/addicon.png'
import PropertiesDetailsTable from './helpers/PropertiesDetailsTable'
const PropertiesDetails = () => {
  const navigate = useNavigate()
  const handleNavigatee = () => {
    navigate('/dashboard/add-project')
  }
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={handleNavigatee}
      >
        <img src={addIcon} alt="" />
        <button>Add new Project</button>
      </Button>
    </div>
  )
  return (
    <div>
      <PageContainer>
        <PropertiesDetailsTable />
      </PageContainer>
    </div>
  )
}

export default PropertiesDetails
