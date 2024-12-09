import { Button, Col, Divider, Form, Modal, Row, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getELoungeSaleUserForAssignToLeadApi,
  postELoungeSaleUserForAssignToLeadApi,
} from '../../../../redux/api/ELoungeUser'
import { useSelector } from 'react-redux'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'

const EloungeSaleUserAssignToLeadModal = ({
  visible,
  toggle,
  data,
  eLoungeId,
}) => {
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [user, setUser] = useState([])

  const [form] = useForm()
  const { Option } = Select

  const GetELoungeSaleUserForAssignToLead = useSelector(
    (state) => state?.GetELoungeSaleUserForAssignToLead
  )
  const PostELoungeSaleUserForAssignToLead = useSelector(
    (state) => state?.PostELoungeSaleUserForAssignToLead
  )
  function onCancel() {
    toggle()
  }
  function onSuccess() {
    toggle()
  }

  function onFinish(values) {
    const body = {
      eLoungSalesUserId: [values?.user],
      eLoungeLeadUserId: data?.eLoungUserId,
      eloungeId: data?.eLoungId,
    }
    postELoungeSaleUserForAssignToLeadApi(dispatch, body, onSuccess)
  }

  function onSuccessGetELounges(allUser) {
    setUser((prev) => {
      return [
        ...prev,
        ...allUser?.data?.items?.map((item) => ({
          title: item?.eloungeUser?.fullName,
          value: item?.eloungeUser?.id,
        })),
      ]
    })
  }
  useEffect(() => {
    getELoungeSaleUserForAssignToLeadApi(
      dispatch,
      pageLimit,
      eLoungeId,
      onSuccessGetELounges
    )
  }, [pageLimit])

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
                    style={{
                      width: '100%',
                      height: '40px',
                    }}
                    dropdownRender={(menu) => {
                      return (
                        <>
                          {menu}
                          <div className="flex justify-center items-center">
                            <Button
                              className="custom-btn mt-2 mb-2"
                              loading={
                                GetELoungeSaleUserForAssignToLead?.loading
                              }
                              onClick={handleLoadMore}
                            >
                              Load More
                            </Button>
                          </div>
                        </>
                      )
                    }}
                  >
                    {user?.map((val, i) => (
                      <Option key={i} value={val.value}>
                        {val?.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={PostELoungeSaleUserForAssignToLead?.loading}
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

export default EloungeSaleUserAssignToLeadModal
