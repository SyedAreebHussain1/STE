import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect } from 'react'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { editCustomPackageFeatureApi } from '../../../redux/api/ManageSubscription'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { useSelector } from 'react-redux'
const EditPackageFeatureModal = ({ visible, toggle, editData }) => {
  const dispatch = useDispatch()

  const updateCustomPackageFeature = useSelector(
    (state) => state.updateCustomPackageFeature
  )

  const [form] = useForm()
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
    editCustomPackageFeatureApi(dispatch, body, onSuccess, editData.id)
  }

  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        title: editData?.title,
        basePrice: editData?.basePrice,
        intervals: editData?.intervals,
      })
    }
  }, [editData])

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Edit Subscription</h3>}
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
              loading={updateCustomPackageFeature.loading}
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

export default EditPackageFeatureModal
