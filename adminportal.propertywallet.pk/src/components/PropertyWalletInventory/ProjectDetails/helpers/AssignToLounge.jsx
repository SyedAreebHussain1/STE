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
import {
  AddInventoryLounge,
  AllLoungesAPi,
} from '../../../../redux/api/Project'
import { clearGetLoungeOwner } from '../../../../redux/slices/Lounge/getLoungeOwnerSlice'
import { nanoid } from 'nanoid'

const AssignToLounge = ({ visible, toggleAdd, project }) => {
  const { data, loading } = useSelector((state) => state?.getLounge)
  const addInventoryLounge = useSelector((state) => state?.AddInventoryLounge)

  const [lounges, setLounges] = useState([])
  const { Option } = Select
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [state, setState] = useState({
    lounge: null,
    lounges: [],
  })
  const dispatch = useDispatch()

  const [form] = useForm()

  const onFinish = (e) => {
    const body = {
      propertyWalletProjectId: project?.id,
      loungeId: state?.lounge,
    }

    AddInventoryLounge(dispatch, body, onSuccess)
  }
  function onSuccess() {
    toggleAdd()
    form.resetFields()
  }
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }
  function onCancel() {
    toggleAdd()
    setState((prev) => ({
      ...prev,
      lounge: null,
    }))
    form.resetFields()
  }
  useEffect(() => {
    if (visible) {
      AllLoungesAPi(dispatch, pageLimit, project?.id, onSuccessGetLounges)
    }
  }, [pageLimit, visible, project?.id])

  function onSuccessGetLounges(allLounges) {
    setLounges((prev) => {
      return [
        ...prev,
        ...allLounges?.data?.items?.map((item) => ({
          name: item.name,
          value: item.id,
        })),
      ]
    })
  }
  useEffect(() => {
    return () => {
      dispatch(clearGetLoungeOwner())
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
      title={<h3 className="text-[18px] font-semibold">Assign Lounge</h3>}
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

          //   textAlign: "center",
        }}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={24}>
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[14px] pb-1"
            >
              Lounge Name
            </h4>
            <Form.Item
              rules={[{ required: true, message: 'Lounge is required' }]}
              name="lounge"
            >
              <Select
                mode="multiple"
                showSearch={false}
                value={state.lounge}
                placeholder="Select lounge"
                style={{
                  textAlign: 'start',
                  minHeight: '42px',
                  display: 'grid',
                }}
                onChange={(e) => {
                  onChange(e, 'lounge')
                }}
                dropdownRender={(menu) => {
                  return (
                    <>
                      {menu}
                      <div className="flex justify-center items-center">
                        <Button
                          className="custom-btn mt-2 mb-2"
                          loading={loading}
                          onClick={handleLoadMore}
                        >
                          Load More
                        </Button>
                      </div>
                    </>
                  )
                }}
              >
                {lounges.length > 0 &&
                  lounges?.map((item, i) => {
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
            // type="primary"

            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            loading={addInventoryLounge.loading}
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AssignToLounge
