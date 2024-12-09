import { Button, Card, Divider, Form, Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { createProductPlotApi } from '../../../../../../redux/api/SingleProperty'
import InputLabel from '../../../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../../../utils/components/InputFields/TextField'

import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'

const AddPlotDetail = ({ visible, toggle, projectId }) => {
  const dispatch = useDispatch()
  const [form] = useForm()
  const createProductPlot = useSelector((state) => state.createProductPlot)
  function onSuccess() {
    toggle()
    form.resetFields()
  }
  function onFinish(values) {
    const body = {
      propertyWalletProductId: projectId,
      title: values.area,
    }
    createProductPlotApi(dispatch, body, onSuccess)
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add New Role</h3>}
      // style={{  }}
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%' }} bordered={false}>
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            style={{
              marginTop: -40,
              //   textAlign: "center",
            }}
            onFinish={onFinish}
          >
            <InputLabel>Name</InputLabel>
            <TextField name="area" />
            <div className="flex justify-end">
              <Button
                size="middle"
                key="1"
                // type="primary"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={toggle}
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
                loading={createProductPlot?.loading}
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
