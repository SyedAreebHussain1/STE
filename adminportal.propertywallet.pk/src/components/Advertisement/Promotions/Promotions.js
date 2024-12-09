import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from './../../../utils/components/PageHeader'
import PromotionsTable from './helpers/PromtionsTable'
import { Button } from 'antd'
import addIcon from '../../../components/assest/icon/addicon.png'
import NoOfPromotionPageHead from './helpers/NoOfPromotionPageHead'
import { useModal } from '../../../utils/hooks/useModal'
import NoOfPromotionAddModal from './helpers/NoOfPromotionAddModal'

const Promotions = () => {
  const [isAddModalVisible, toggleAdd] = useModal()

  const handleOnClick = () => {
    toggleAdd()
  }
  const addNewPromotion = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={handleOnClick}
      >
        <img src={addIcon} alt="" />
        <button>Add new Promotions</button>
      </Button>
    </div>
  )
  return (
    <>
      <NoOfPromotionAddModal
        visible={isAddModalVisible}
        toggleAdd={toggleAdd}
      />
      <PageContainer>
        <NoOfPromotionPageHead
          title={'Promotions'}
          subTitle={'Find all of your Promotions'}
          toggleAdd={toggleAdd}
          addNewPromotion={addNewPromotion}
        />
        <PromotionsTable handleOnClick={handleOnClick} />
      </PageContainer>
    </>
  )
}

export default Promotions
