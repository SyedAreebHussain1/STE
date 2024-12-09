import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Divider, Form, Modal, Row, Col } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { popupProjectAddPopUpFormAdminSideApi } from '../../../../redux/api/Project'
import { useUpload } from '../../../../utils/hooks/useUpload'
import SingleFilePreviewer from '../../../../utils/components/Upload/SingleFilePreviewer'
import Upload from '../../../../utils/components/Upload/Upload'
import { uploadAdvertisementApi } from '../../../../redux/api/Milestones'

const AddPopup = ({ visible, toggleAdd, project }) => {
  const [form] = useForm()
  const dispatch = useDispatch()
  const [
    backgroundImage,
    setBackgroundImage,
    backgroundImagePreview,
    deleteBackgroundImage,
  ] = useUpload()
  const popupProjectAddPopUpForm = useSelector(
    (state) => state.popupProjectAddPopUpForm
  )
  const onFinish = (e) => {
    const formData = new FormData()
    formData.append('advertisement', backgroundImage[0])
    uploadAdvertisementApi(dispatch, formData, onSuccess, project?.id)
  }
  function onSuccess(res, id) {
    if (res && id) {
      const body = {
        projectId: id,
        url: res?.data,
      }
      popupProjectAddPopUpFormAdminSideApi(dispatch, body, toggleAdd)
      form.resetFields()
    }
  }
  function onCancel() {
    toggleAdd()
    form.resetFields()
  }

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Popup</h3>}
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
              {/* Add Popup */}
            </h4>
            <Form.Item
              rules={[{ required: true, message: 'Image is required' }]}
              name="Popup"
            >
              <div>
                <Row gutter={10}>
                  <Col lg={6} xs={24}>
                    <Upload
                      name="backgroundImage"
                      files={backgroundImage}
                      setFiles={setBackgroundImage}
                      supportedFileTypes={['png', 'jpg', 'jpeg']}
                      supportedText={'Files Supported  JPG,JPEG,PNG'}
                    />
                  </Col>
                  <Col lg={12} xs={24}>
                    <div>
                      {backgroundImagePreview.length > 0 && (
                        <div className="relative">
                          <SingleFilePreviewer
                            imagePreviews={backgroundImagePreview}
                            uploadAdvertisement={
                              backgroundImagePreview?.[0]?.url
                            }
                            width={241}
                            height={197}
                            deleteMasterFile={deleteBackgroundImage}
                          />
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end">
          <Button
            size="middle"
            key="2"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            loading={popupProjectAddPopUpForm.loading}
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AddPopup
