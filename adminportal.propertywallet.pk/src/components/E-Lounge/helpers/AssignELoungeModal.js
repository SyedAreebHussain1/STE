import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider, Select } from 'antd'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import { clearUploadAdvertisement } from '../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'

import {
  getELoungeApi,
  getEloungeUserNameAndIdApi,
  postELoungeAssignUserApi,
} from '../../../redux/api/ELounge'

const AssignELoungeModal = ({ visible, toggle, data }) => {
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const [form] = useForm()

  const GetEloungeUserNameAndId = useSelector(
    (state) => state?.GetEloungeUserNameAndId
  )
  const AssignUserELounge = useSelector((state) => state?.AssignUserELounge)

  function onCancel() {
    dispatch(clearUploadAdvertisement())
    toggle()
  }

  function onFinish(values) {
    const body = {
      eLoungUserId: values?.user,
      eLoungeId: data?.id,
    }
    postELoungeAssignUserApi(dispatch, body, onSuccess)
  }

  function onSuccess() {
    getELoungeApi(dispatch, pageLimit)
    toggle()
  }
  useEffect(() => {
    getEloungeUserNameAndIdApi(dispatch, pageLimit)
  }, [])

  return (
    <Modal
      title={
        <h3 className="text-[18px] font-semibold">
          Assign User to this E-Lounge
        </h3>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={713}
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
            <Col lg={24} sm={24}>
              <div>
                <InputLabel>Select User</InputLabel>
                <Form.Item
                  name="user"
                  rules={[
                    {
                      required: true,
                      message: 'User is required',
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    size="large"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Users"
                    options={GetEloungeUserNameAndId?.data?.data?.map(
                      (val) => ({
                        label: val?.fullName,
                        value: val?.id,
                      })
                    )}
                  />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={AssignUserELounge.loading}
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

export default AssignELoungeModal
