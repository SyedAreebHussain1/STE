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
import { useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import {
  assignBDMeetingSessionApi,
  getListAllBDUserApi,
} from '../../../../../../redux/api/BDMeeting'

const AssignTeamMemberModal = ({ visible, toggle }) => {
  const params = useParams()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const { Option } = Select

  const getListAllBDUser = useSelector((state) => state?.getListAllBDUser)
  const assignBDMeetingSession = useSelector(
    (state) => state?.assignBDMeetingSession
  )
  const [state, setState] = useState({
    member: null,
    members: [],
  })

  const dispatch = useDispatch()

  const [form] = useForm()

  const onFinish = (e) => {
    const body = {
      bdMeetingId: params?.id,
      bdUserId: state.member,
    }
    if (params?.id) {
      assignBDMeetingSessionApi(dispatch, body, onSuccess)
    }
  }
  function onSuccess() {
    toggle()
    form.resetFields()
  }
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }
  function onCancel() {
    toggle()
    setState((prev) => ({
      ...prev,
      member: null,
    }))
    form.resetFields()
  }
  useEffect(() => {
    if (visible) {
      getListAllBDUserApi(dispatch, pageLimit)
    }
  }, [pageLimit, visible])

  console.log('getListAllBDUser', getListAllBDUser)

  //   function handleLoadMore(e) {
  //     e.preventDefault()
  //     e.stopPropagation()
  //     setPageLimit((prev) => {
  //       return {
  //         ...prev,
  //         page: prev.page + 1,
  //       }
  //     })
  //   }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Team Member</h3>}
      open={visible}
      width={700}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />

      <Form
        form={form}
        name="normal_login"
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
              Members
            </h4>
            <Form.Item
              rules={[{ required: true, message: 'Member is required' }]}
              name="member"
            >
              <Select
                mode="multiple"
                showSearch={false}
                value={state.member}
                placeholder="Select member"
                style={{
                  textAlign: 'start',
                  minHeight: '42px',
                  display: 'grid',
                }}
                onChange={(e) => {
                  onChange(e, 'member')
                }}
                // dropdownRender={(menu) => {
                //   return (
                //     <>
                //       {menu}
                //       <div className="flex justify-center items-center">
                //         <Button
                //           className="custom-btn mt-2 mb-2"
                //           //   loading={loading}
                //         >
                //           Load More
                //         </Button>
                //       </div>
                //     </>
                //   )
                // }}
              >
                {getListAllBDUser?.data?.data?.length > 0 &&
                  getListAllBDUser?.data?.data?.map((item, i) => {
                    return (
                      <Option value={item.id} key={nanoid()}>
                        {item.fullName}
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
            loading={assignBDMeetingSession?.loading}
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AssignTeamMemberModal
