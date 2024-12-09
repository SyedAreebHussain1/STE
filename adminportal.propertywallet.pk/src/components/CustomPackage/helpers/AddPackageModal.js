import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect } from 'react'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { addCustomPackagePlanApi } from '../../../redux/api/ManageSubscription'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'

const AddPackageModal = ({ visible, toggle }) => {
  const [form] = useForm()

  const dispatch = useDispatch()
  const addCustomPackagePlan = useSelector(
    (state) => state.addCustomPackagePlan
  )
  function onCancel() {
    toggle()
  }
  const noOfMonths = {
    Monthly: 'MONTHLY',
    Quarterly: 'QUARTERLY',
    Yearly: 'YEARLY',
    'Half Yearly': 'HALFYEARLY',
  }
  function onSuccess() {
    toggle()
  }
  function onFinish(values) {
    const body = {
      title: values?.title,
      planMonths: Number(values?.planMonths),
      discountPercentage: Number(values?.discountPercentage),
      fixCommision: Number(values?.fixCommision),
      regCommision: Number(values?.regCommision),
      rentalCommission: Number(values?.rentalCommission),
      monthlyRentCommision: Number(values?.monthlyRentCommision),
      BdRegCommission: Number(values?.BdRegCommission),
      BdRentalCommission: Number(values?.BdRentalCommission),
      BdFixCommission: Number(values?.BdFixCommission),
      BdNoCommissionCount: Number(values?.BdNoCommissionCount),
      StandardFee: Number(values?.StandardFee),
      SetupCommission: Number(values?.SetupCommission),
    }
    addCustomPackagePlanApi(dispatch, body, onSuccess)
  }

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Subscription</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={719}
    >
      <Divider />

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <div>
          <Row gutter={16}>
            <Col lg={12} sm={24}>
              <div>
                <InputLabel>
                  Title <span class="text-red-700 ">*</span>
                </InputLabel>
                <SelectField
                  name="title"
                  options={Object.keys(noOfMonths).map((month) => {
                    return {
                      label: month,
                      value: noOfMonths[month],
                    }
                  })}
                />
              </div>
              <div>
                <InputLabel>
                  Discount Percentage (%) <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField
                  name="discountPercentage"
                  onChange={(e) => {
                    if (e.target.value >= 100) {
                      form.setFieldValue('discountPercentage', 100)
                    }
                  }}
                />
              </div>
              <div>
                <InputLabel>
                  Reg Commission (%) <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField
                  name="regCommision"
                  onChange={(e) => {
                    if (e.target.value >= 100) {
                      form.setFieldValue('regCommision', 100)
                    }
                  }}
                />
              </div>
              <div>
                <InputLabel>
                  No. of Month of Rent Commission{' '}
                  <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="monthlyRentCommision" />
              </div>

              <div>
                <InputLabel>
                  BD Fix Commission (Amount){' '}
                  <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="BdFixCommission" />
              </div>
              <div>
                <InputLabel>
                  BD No of Commission Count <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="BdNoCommissionCount" />
              </div>
              <div>
                <InputLabel>
                  Standard Fee <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="StandardFee" />
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div>
                <InputLabel>
                  Plan Months <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="planMonths" />
              </div>
              <div>
                <InputLabel>
                  Fix Commission (Amount) <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="fixCommision" />
              </div>
              <div>
                <InputLabel>
                  Recurring Commission (%) <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField
                  name="rentalCommission"
                  onChange={(e) => {
                    if (e.target.value >= 100) {
                      form.setFieldValue('rentalCommission', 100)
                    }
                  }}
                />
              </div>

              <div>
                <InputLabel>
                  BD Registration Commission (%){' '}
                  <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField
                  name="BdRegCommission"
                  onChange={(e) => {
                    if (e.target.value >= 100) {
                      form.setFieldValue('BdRegCommission', 100)
                    }
                  }}
                />
              </div>
              <div>
                <InputLabel>
                  BD Recurring Commission (%)
                  <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField
                  name="BdRentalCommission"
                  onChange={(e) => {
                    if (e.target.value >= 100) {
                      form.setFieldValue('BdRentalCommission', 100)
                    }
                  }}
                />
              </div>
              <div>
                <InputLabel>
                  Setup Commission (%)
                  <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField
                  name="SetupCommission"
                  onChange={(e) => {
                    if (e.target.value >= 100) {
                      form.setFieldValue('SetupCommission', 100)
                    }
                  }}
                />
              </div>
            </Col>
          </Row>

          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              // type="primary"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={addCustomPackagePlan.loading}
              htmlType="submit"
            >
              Add Now
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default AddPackageModal
