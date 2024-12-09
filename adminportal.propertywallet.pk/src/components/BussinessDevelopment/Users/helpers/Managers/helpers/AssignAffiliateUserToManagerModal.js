import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Col,
  Select,
} from 'antd'

import { useForm } from 'antd/es/form/Form'
import { nanoid } from 'nanoid'
import {
  assignAffiliateUserToManagerApi,
  getAllAffiliateForAssignApi,
} from '../../../../../../redux/api/BDUsers'
import { clearGetAllAffilateForAssignToManager } from '../../../../../../redux/slices/BDUserAffiliateUser/GetAllAffilateForAssignToManagerSlice'

const AssignAffiliate = ({ visible, toggle, value }) => {
  const { loading, data } = useSelector(
    (state) => state?.AssignAffiliateToManager
  )

  const [userValue, setUserValue] = useState([])
  const { Option } = Select
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()

  const [form] = useForm()

  function onSuccess() {
    toggle()
    form.resetFields()
  }
  const onFinish = (e) => {
    const body = {
      affiliateIds: e.affiliate,
      managerId: value?.id,
    }

    assignAffiliateUserToManagerApi(dispatch, body, onSuccess)
  }
  function onCancel() {
    toggle()
    form.resetFields()
  }
  useEffect(() => {
    if (visible && value) {
      getAllAffiliateForAssignApi(
        dispatch,
        value?.id,
        onSuccessAffiliate,
        pageLimit
      )
    }
  }, [pageLimit, visible, value])

  function onSuccessAffiliate(allAffiliate) {
    setUserValue((prev) => {
      return [
        ...prev,
        ...allAffiliate?.data?.map((item) => ({
          name: item.fullName,
          value: item.id,
        })),
      ]
    })
  }
  useEffect(() => {
    return () => {
      dispatch(clearGetAllAffilateForAssignToManager())
    }
  }, [])

  function handleLoadMore(e) {
    e.preventDefault()
    e.stopPropagation()
    setPageLimit((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      }
    })
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Assign Affiliate</h3>}
      open={visible}
      width={700}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />

      <Form
        name="normal_login"
        form={form}
        className="login-form"
        initialValues={{ remember: true }}
        style={{
          marginTop: -5,
        }}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={24}>
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[14px] pb-1"
            >
              Affiliate Name
            </h4>
            <Form.Item
              rules={[{ required: true, message: 'Affiliate is required' }]}
              name="affiliate"
            >
              <Select
                mode="multiple"
                showSearch={false}
                placeholder="Select Affiliate"
                style={{
                  textAlign: 'start',
                  minHeight: '42px',
                  display: 'grid',
                }}
              >
                {userValue.length > 0 &&
                  userValue?.map((item, i) => {
                    return (
                      <Option value={item.value} key={nanoid()}>
                        {item.name}
                      </Option>
                    )
                  })}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end">
          <Button
            size="middle"
            key="2"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AssignAffiliate
