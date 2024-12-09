import { Button, Card, Checkbox, Divider, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../../../../utils/components/InputFields/TextField'
import { createPlotApi } from '../../../../../../../redux/api/Project/ProjectInventory'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { useSelector } from 'react-redux'

const AddPlotDetail = ({ visible, toggle, projectId }) => {
  const dispatch = useDispatch()
  const [isChargeable, setIsChargeable] = useState(false)
  const [form] = useForm()
  const createPlot = useSelector((state) => state.createPlot)
  function onSuccess() {
    toggle()
    form.resetFields()
    setIsChargeable(false)
  }
  function onFinish(values) {
    const body = {
      propertyWalletProjectId: projectId,
      title: values.area,
    }
    if (isChargeable) {
      body.premiumCharges = values.percentage
    }
    createPlotApi(dispatch, body, onSuccess)
  }

  function onCancel() {
    toggle()
    form.resetFields()
    setIsChargeable(false)
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add New</h3>}
      // style={{  }}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%' }}>
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            style={
              {
                //   textAlign: "center",
              }
            }
            onFinish={onFinish}
          >
            <div className="flex flex-col gap-3">
              <div>
                <InputLabel>Name</InputLabel>
                <Form.Item
                  name={'area'}
                  className="mt-[10px] mb-[0]"
                  rules={[
                    {
                      required: true,
                      message: 'required',
                    },
                  ]}
                >
                  <Input
                    className={`w-full lg:w-[] h-[] rounded-[8px]`}
                    size="large"
                  />
                </Form.Item>
              </div>
              <Checkbox
                checked={isChargeable}
                onChange={() => setIsChargeable((prev) => !prev)}
              >
                Chargeable
              </Checkbox>
              {isChargeable && (
                <div>
                  <InputLabel>Percentage</InputLabel>
                  <Form.Item
                    name={'percentage'}
                    className="mt-[10px] mb-[10px]"
                    rules={[
                      {
                        required: true,
                        message: 'required',
                      },
                    ]}
                  >
                    <Input
                      className={`w-full lg:w-[] h-[] rounded-[8px]`}
                      size="large"
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault()
                        }
                      }}
                    />
                  </Form.Item>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <Button
                size="middle"
                key="1"
                // type="primary"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={onCancel}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="2"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                // loading={postRoles.loading}
                htmlType="submit"
                loading={createPlot?.loading}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </Modal>
  )
}

export default AddPlotDetail
