import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { Button, Col, Row } from 'antd'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../../../../../utils/components/InputFields/SelectField'
import PlanFields from './PllansFields/PlanFields'
// import { createPropertyWalletProductStepThreeApi } from '../../../../../../../redux/api/Project/ProjectInventory'
import { getAllPWInstallmentPaymentPlanApi } from '../../../../../../../redux/api/Project/ProjectInventory'
// modal
import { useModal } from '../../../../../../../utils/hooks/useModal'
import AddNewTemplatePaymentPlanModal from './AddNewTemplatePaymentPlanModal'
import EditPaymentPlanModal from './EditPaymentPlanModal'
// icon
import addicon from '../../../../../../../components/assest/icon/addicon.png'
import penmark from '../../../../../../../components/assest/icon/penmark.png'

const InstallmentSection = ({ setBody, body, current, form, tokenPayment }) => {
  const dispatch = useDispatch()
  const [renderComponent, setRenderComponent] = useState()
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isEditPlanModalVisible, toggleEditPlan] = useModal()
  const createPrice = useSelector(
    (state) => state.updateProjectInventoryStepOne?.data?.data?.id
  )

  const getAllPWInstallmentPaymentPlan = useSelector(
    (state) => state.getAllPWInstallmentPaymentPlan
  )
  const createPropertyWalletInventoryStep3SaveTemplete = useSelector(
    (state) => state.createPropertyWalletInventoryStep3SaveTemplete
  )
  const updatePropertyWalletInventoryStep3Templete = useSelector(
    (state) => state.updatePropertyWalletInventoryStep3Templete
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
      <img src={addicon} alt="" /> <span>Add Installment Template</span>
    </Button>
  )

  useEffect(() => {
    if (current === 2) {
      getAllPWInstallmentPaymentPlanApi(dispatch, createPrice)
      form.setFieldValue('plan', null)
      setRenderComponent(null)
    }
  }, [
    current,
    createPropertyWalletInventoryStep3SaveTemplete?.data,
    updatePropertyWalletInventoryStep3Templete?.data,
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
            data={getAllPWInstallmentPaymentPlan?.data?.data?.filter(
              (item) => item.id === renderComponent
            )}
          />
        )}
      <SectionContainer
        title="Installment"
        subtitle="Select the plan installment plan"
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
              options={getAllPWInstallmentPaymentPlan?.data?.data?.map(
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

        {/* {renderComponent === 'monthly' ? (
                    <MonthlyPlan />
                ) : renderComponent === 'quarterly' ? (
                    <QuarterlyPlan />
                ) : renderComponent === 'balloon' ? (
                    <BalloonPlan />
                ) : (
                    ''
                )} */}
        {renderComponent && typeof renderComponent === 'number' && (
          <PlanFields
            data={getAllPWInstallmentPaymentPlan?.data?.data?.filter(
              (item) => item.id === renderComponent
            )}
          />
        )}
      </SectionContainer>
    </>
  )
}

export default InstallmentSection
