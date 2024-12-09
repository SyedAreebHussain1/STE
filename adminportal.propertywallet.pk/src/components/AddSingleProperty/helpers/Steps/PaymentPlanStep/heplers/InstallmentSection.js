import React, { useEffect, useState } from 'react'
import SectionContainer from '../../../../../../utils/components/SectionContainer'
import { Button, Col, Row } from 'antd'
import InputLabel from '../../../../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../../../../utils/components/InputFields/SelectField'

// icon
import addicon from '../../../../../assest/icon/addicon.png'
import penmark from '../../../../../assest/icon/penmark.png'

// import NoOfPromotionAddModal from '../../../../../Advertisement/Promotions/helpers/NoOfPromotionAddModal'
import { useModal } from '../../../../../../utils/hooks/useModal'
import AddNewTemplatePaymentPlanModal from './AddNewTemplatePaymentPlanModal'
import EditPaymentPlanModal from './EditPaymentPlanModal'
import { useDispatch } from 'react-redux'
import { getAllPWProductInstallmentPaymentPlanApi } from '../../../../../../redux/api/SingleProperty'
import { useSelector } from 'react-redux'
import PlanFields from './PllansFields/PlanFields'

const InstallmentSection = ({ current, form, tokenPayment }) => {
  const dispatch = useDispatch()
  const [renderComponent, setRenderComponent] = useState()
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isEditPlanModalVisible, toggleEditPlan] = useModal()
  const createPrice = useSelector(
    (state) => state.createPropertyWalletProductStepOne?.data?.data?.id
  )
  const updatePrice = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const getAllPWProductInstallmentPaymentPlan = useSelector(
    (state) => state.getAllPWProductInstallmentPaymentPlan
  )
  const createPropertyWalletProductStep3SaveTemplete = useSelector(
    (state) => state.createPropertyWalletProductStep3SaveTemplete
  )
  const updatePropertyWalletProductStep3Templete = useSelector(
    (state) => state.updatePropertyWalletProductStep3Templete
  )

  const handleOnClick = () => {
    toggleAdd()
  }
  const handleClickEdit = () => {
    toggleEditPlan()
  }
  const addNewTemplateBtn = (
    <Button
      onClick={handleOnClick}
      className="py-[10px] px-[12px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2 mt-[1%]"
    >
      {' '}
      <img src={addicon} alt="" /> <span>Add Installment Template</span>
    </Button>
  )

  useEffect(() => {
    if (current === 3) {
      getAllPWProductInstallmentPaymentPlanApi(dispatch, createPrice)
      form.setFieldValue('plan', null)
      setRenderComponent(null)
    }
  }, [
    current,
    createPropertyWalletProductStep3SaveTemplete?.data,
    updatePropertyWalletProductStep3Templete?.data,
  ])
  return (
    <>
      {isAddModalVisible && (
        <AddNewTemplatePaymentPlanModal
          visible={isAddModalVisible}
          toggleAdd={toggleAdd}
          tokenPayment={tokenPayment}
        />
      )}

      {renderComponent &&
        typeof renderComponent === 'number' &&
        isEditPlanModalVisible && (
          <EditPaymentPlanModal
            visible={isEditPlanModalVisible}
            toggleAdd={toggleEditPlan}
            data={getAllPWProductInstallmentPaymentPlan?.data?.data?.filter(
              (item) => item.id === renderComponent
            )}
          />
        )}
      <SectionContainer
        title="Installment"
        subtitle="Set the features according to your property"
        extras={addNewTemplateBtn}
      >
        <Row gutter={16}>
          <Col lg={10} xs={24}>
            <div className="flex justify-between">
              <div>
                <InputLabel>Plan</InputLabel>
              </div>
              {renderComponent ? (
                <div
                  className="flex leading-[18px] gap-1"
                  onClick={handleClickEdit}
                >
                  <div>
                    <img src={penmark} alt="markicon" />
                  </div>
                  <span className="font-medium text-[12px] text-[#27A3A3] cursor-pointer">
                    Edit Plan
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
            <SelectField
              name="plan"
              required={false}
              options={getAllPWProductInstallmentPaymentPlan?.data?.data?.map(
                (val) => ({
                  label: val?.title,
                  value: val?.id,
                })
              )}
              onChange={(e) => {
                setRenderComponent(e)
              }}
            />
          </Col>
          {/* <Col xs={24} lg={5}>
                        <InputLabel>No of Months</InputLabel>
                        <NumberField name="noOfMonths" />
                    </Col> */}
        </Row>

        {renderComponent && typeof renderComponent === 'number' && (
          <PlanFields
            data={getAllPWProductInstallmentPaymentPlan?.data?.data?.filter(
              (item) => item.id === renderComponent
            )}
          />
        )}
      </SectionContainer>
    </>
  )
}

export default InstallmentSection
