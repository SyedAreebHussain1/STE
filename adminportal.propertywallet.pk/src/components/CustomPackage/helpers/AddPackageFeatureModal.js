import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect } from 'react'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { addCustomPackageFeatureApi } from '../../../redux/api/ManageSubscription'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'

const AddPackageFeatureModal = ({ visible, toggle }) => {
  const [form] = useForm()

  const dispatch = useDispatch()
  const addCustomPackageFeature = useSelector(
    (state) => state.addCustomPackageFeature
  )
  function onCancel() {
    toggle()
  }
  const noOfMonths = {
    Listings: 'LISTINGS',
    HotListings: 'HOTLISTINGS',
    Users: 'USERS',
    Refreshes: 'REFRESHES',
    'Website Setup': 'WEBSITESETUP',
    Website: 'WEBSITE',
    Appointments: 'APPOINTMENTS',
  }
  function onSuccess() {
    toggle()
  }
  function onFinish(values) {
    const body = {
      title: values?.title,
      basePrice: values?.basePrice,
      intervals: values?.intervals,
    }
    addCustomPackageFeatureApi(dispatch, body, onSuccess)
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
          <Col lg={24} sm={24}>
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
          </Col>
          <Row gutter={16}>
            <Col lg={12} sm={24}>
              <div>
                <InputLabel>
                  Intervals <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="intervals" />
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div>
                <InputLabel>
                  Base Price <span class="text-red-700 ">*</span>
                </InputLabel>
                <NumberField name="basePrice" />
              </div>
            </Col>
          </Row>

          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              // type="primary"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={addCustomPackageFeature.loading}
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

export default AddPackageFeatureModal
