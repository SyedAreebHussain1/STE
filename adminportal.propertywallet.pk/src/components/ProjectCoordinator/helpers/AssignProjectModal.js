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
  getProjectsForAssignApi,
  projectAssignToCooApi,
} from '../../../redux/api/ProjectCoordinator'
import { cleargetProjectNameForAssignByID } from '../../../redux/slices/ProjectCoordinator/getProjectNameForAssignByIDSlice'

const AssignProject = ({ visible, toggle, value }) => {
  const { loading, data } = useSelector((state) => state?.getProjectsForAssign)
  const projectAssignToCoordinatorByID = useSelector(
    (state) => state?.projectAssignToCoordinatorByID
  )

  const [projects, setProjects] = useState([])

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const { Option } = Select
  const [form] = useForm()

  function onSuccess() {
    toggle()
    form.resetFields()
  }
  const onFinish = (e) => {
    const body = {
      projectCoordinatorUserId: value?.id,
      propertyWalletProjectId: e.project,
    }

    projectAssignToCooApi(dispatch, body, onSuccess)
  }
  function onCancel() {
    toggle()
    form.resetFields()
  }
  useEffect(() => {
    if (visible && value) {
      getProjectsForAssignApi(dispatch, value?.id, onSuccessProject, pageLimit)
    }
  }, [pageLimit, visible, value])

  function onSuccessProject(allProjects) {
    setProjects((prev) => {
      return [
        ...prev,
        ...allProjects?.data?.items?.map((item) => ({
          name: item.projectName,
          value: item.id,
        })),
      ]
    })
  }
  useEffect(() => {
    return () => {
      dispatch(cleargetProjectNameForAssignByID())
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
      title={<h3 className="text-[18px] font-semibold">Assign Project</h3>}
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
              Project Name
            </h4>
            <Form.Item
              rules={[{ required: true, message: 'Project is required' }]}
              name="project"
            >
              <Select
                mode="multiple"
                showSearch={false}
                placeholder="Select project"
                style={{
                  textAlign: 'start',
                  minHeight: '42px',
                  display: 'grid',
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
                {projects.length > 0 &&
                  projects?.map((item, i) => {
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
            loading={projectAssignToCoordinatorByID?.loading}
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AssignProject
