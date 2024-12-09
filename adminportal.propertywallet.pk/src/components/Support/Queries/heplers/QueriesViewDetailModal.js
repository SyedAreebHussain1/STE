import { Button, Divider, Modal, Form } from 'antd'
import React, { useEffect } from 'react'
import TextField from '../../../../utils/components/InputFields/TextField'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../../utils/components/InputFields/SelectField'
import { updateCrmRequestsApi } from '../../../../redux/api/CrmRequests'
import { useDispatch } from 'react-redux'

const QueriesViewDetailModal = ({ modal, updateId, status, selectedData }) => {
  const dispatch = useDispatch()
  function onSuccess() {
    modal.toggleAdd()
  }
  function onFinish(values) {
    modal.toggleAdd()
    // const body = {
    //   status: status,
    //   cashDealCommissionAmount: values.commisson,
    //   InstallmentDealCommissionAmount: values.discount,
    // };
  }

  return (
    <Modal
      width={'462px'}
      title={<h3 className="text-[15px]">Complaint Details</h3>}
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
        <div className="flex justify-center">
          <div style={{ width: '100%' }} bordered={false}>
            <div>
              <div>
                <InputLabel>Subject</InputLabel>
                <div className="border border-#D0D5DD-600 p-[10px]">
                  <p className="font-medium text-[#667085] text-[14px]">
                    {selectedData?.subject}
                  </p>
                </div>
              </div>
              <div>
                <InputLabel>Message</InputLabel>
                <div className="border border-#D0D5DD-600 p-[10px] text-[14px]">
                  <p className="font-medium text-[#667085]">
                    {selectedData?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[55px]">
          <Button
            size="middle"
            key="1"
            // type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            // loading={postRoles.loading}
            htmlType="submit"
          >
            Done
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default QueriesViewDetailModal
