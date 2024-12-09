import { Button, Divider, Modal, Form } from 'antd'
import React, { useEffect } from 'react'
import TextField from '../../../utils/components/InputFields/TextField'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { updateCrmRequestsApi } from '../../../redux/api/CrmRequests'
import { useDispatch } from 'react-redux'

const CommisionAndDiscountModal = ({ modal, updateId, status }) => {
  const dispatch = useDispatch()
  function onSuccess() {
    modal.toggleAdd()
  }
  function onFinish(values) {
    const body = {
      status: status,
      cashDealCommissionAmount: values.commisson,
      InstallmentDealCommissionAmount: values.discount,
    }
    updateCrmRequestsApi(dispatch, body, updateId, onSuccess)
  }

  return (
    <Modal
      width={'462px'}
      title={<h3 className="text-[15px]">Set Commission and Discount</h3>}
      // style={{  }}
      open={modal.isAddModalVisible}
      onCancel={modal.toggleAdd}
      footer={null}
      centered={true}
    >
      <Form
        name="crm-requests-modal"
        className="projects-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        //   form={form}
      >
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%' }} bordered={false}>
            <div>
              <div>
                <InputLabel>Set Commission</InputLabel>
                <TextField name="commisson" />
              </div>
              <div>
                <InputLabel>Set Discount</InputLabel>
                <TextField name="discount" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[55px]">
          <Button
            size="middle"
            key="4"
            className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
            //   onClick={onCancel}
          >
            Close
          </Button>
          <Button
            size="middle"
            key="1"
            // type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            // loading={postRoles.loading}
            htmlType="submit"
          >
            Confirm
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default CommisionAndDiscountModal
