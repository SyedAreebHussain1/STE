import { Button, Col, Divider, Form, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useUpload } from '../../../../../utils/hooks/useUpload'
import Upload from '../../../../../utils/components/Upload/Upload'
import ArrowRight from '../../../../assest/icon/arrow-right.png'
import { useDispatch, useSelector } from 'react-redux'
import { errorMessage } from '../../../../../utils/message'
import {
  createProjectStepThreeApi,
  getProjectStepThreeApi,
  updateProjectStepThreeApi,
} from '../../../../../redux/api/Project'
import { CloseOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { useForm } from 'antd/es/form/Form'
import draftToHtml from 'draftjs-to-html'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs'

const BuilderInfoStep = ({ current, next, prev }) => {
  const params = useParams()
  const [editorState, setEditorState] = useState('')
  const [form] = useForm()
  const [builderLogo, setBuilderLogo, logoPreview, deleteFile] = useUpload()
  const createProjectStepOne = useSelector(
    (state) => state.createProjectStepOne
  )
  const createProjectStepThree = useSelector(
    (state) => state.createProjectStepThree
  )
  const updateProjectStepThree = useSelector(
    (state) => state.updateProjectStepThree
  )
  const getProjectStepThree = useSelector((state) => state.getProjectStepThree)
  const dispatch = useDispatch()

  function onSuccess() {
    next()
  }
  function onFinish(values) {
    if (
      builderLogo.length === 0 &&
      getProjectStepThree?.data?.data?.BuilderLogo === null
    ) {
      errorMessage('Builder Logo is required')
      return
    }
    const body = {
      ...values,
    }
    if (body.phoneNo[0] === '0') {
      body.phoneNo = '+92' + body.phoneNo.split('').splice(1).join('')
    } else if (body.phoneNo[0] === '3') {
      body.phoneNo = '+92' + body.phoneNo
    } else {
      errorMessage('Invalid phone number')
      return
    }
    if (
      createProjectStepThree?.data === null &&
      getProjectStepThree?.data?.data?.builderName === null &&
      getProjectStepThree?.data?.data?.phoneNo === null &&
      getProjectStepThree?.data?.data?.websiteLink === null &&
      getProjectStepThree?.data?.data?.BuilderLogo === null
    ) {
      const formData = new FormData()
      formData.append('builderName', body.builderName)
      formData.append('phoneNo', body.phoneNo)
      formData.append('websiteLink', body.websiteLink)
      formData.append('termsAndConditions', body.termsAndConditions)
      formData.append('BuilderLogo', builderLogo[0])
      formData.append('propertyWalletProjectId', params?.id)
      createProjectStepThreeApi(dispatch, formData, onSuccess)
    } else {
      const formData = new FormData()
      formData.append('builderName', body.builderName)
      formData.append('phoneNo', body.phoneNo)
      formData.append('websiteLink', body.websiteLink)
      formData.append('BuilderLogo', builderLogo[0])
      formData.append('termsAndConditions', body.termsAndConditions)
      updateProjectStepThreeApi(dispatch, formData, onSuccess, params?.id)
    }
  }
  useEffect(() => {
    if (current === 2) {
      getProjectStepThreeApi(dispatch, params?.id)
    }
  }, [current])

  useEffect(() => {
    if (getProjectStepThree?.data) {
      if (getProjectStepThree?.data?.data?.termsAndConditions) {
        const contentBlock = htmlToDraft(
          getProjectStepThree?.data?.data?.termsAndConditions
        )
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        )
        const editorState = EditorState.createWithContent(contentState)
        setEditorState(editorState)
      }
      form.setFieldsValue({
        builderName: getProjectStepThree?.data?.data?.builderName,
        phoneNo: getProjectStepThree?.data?.data?.phoneNo?.slice(3),
        websiteLink: getProjectStepThree?.data?.data?.websiteLink,
        termsAndConditions: getProjectStepThree?.data?.data?.termsAndConditions,
      })
    }
  }, [getProjectStepThree?.data])
  useEffect(() => {
    if (editorState) {
      const draftToHtmlConverted = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      )
      form.setFieldValue('termsAndConditions', draftToHtmlConverted)
    }
  }, [editorState])
  const toolbarOptions = {
    options: [
      'inline',
      'list',
      'textAlign',
      'link',
      'emoji',
      'image',
      'remove',
      'fontSize',
      'history',
    ],
  }
  return (
    <>
      <Form
        name="project-step-one"
        className="projects-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <Row gutter={24}>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px]">
              Builder Details
            </span>
            <p className="text-[#667085] font-medium text-[12px]">
              Provide the details of the builder
            </p>
          </Col>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px] gap-[]">
              Name
            </span>
            <Form.Item
              className="mt-[10px]"
              name="builderName"
              rules={[
                {
                  required: true,
                  message: 'Builder name is required',
                },
              ]}
            >
              <Input
                placeholder=""
                className="w-full lg:w-[] h-[] rounded-[8px]"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={6} xs={24}>
            <div className="" style={{ alignItems: '' }}>
              <span className="text-[#292D35] font-medium text-[15px] gap-[]">
                Phone Number
              </span>
              <Form.Item
                name="phoneNo"
                rules={[
                  {
                    required: true,
                    message: 'Phone is required',
                  },
                ]}
              >
                <Input
                  className="py-2"
                  maxLength={11}
                  onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                  addonBefore="+92"
                  size="large"
                />
              </Form.Item>
            </div>
          </Col>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px] gap-[]">
              Website
            </span>
            <Form.Item className="mt-[10px]" name="websiteLink">
              <Input
                placeholder=""
                className="w-full lg:w-[] h-[] rounded-[8px]"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px]">
              Builder Logo
            </span>
            <p className="text-[#667085] font-medium text-[12px]">
              Provide the logo of the builder
            </p>
          </Col>
          <Col lg={8} xs={24}>
            <Upload
              name="builderLogo"
              files={builderLogo}
              setFiles={setBuilderLogo}
              supportedFileTypes={['png', 'jpg', 'jpeg']}
              supportedText={'Files Supported  JPG,JPEG,PNG'}
            />
          </Col>
          <Col lg={8} xs={24}>
            <div className="" style={{ alignItems: '' }}>
              {logoPreview.length > 0 ? (
                <div className="relative w-fit">
                  <img
                    src={logoPreview[0].url}
                    alt=""
                    className="h-[185px] object-contain"
                  />
                  {/* <span
                    className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                    onClick={() => deleteFile(logoPreview[0].name)}
                  >
                    <CloseOutlined />
                  </span> */}
                </div>
              ) : (
                <div className="relative w-fit">
                  <img
                    src={getProjectStepThree?.data?.data?.BuilderLogo}
                    alt=""
                    className="h-[185px] object-contain"
                  />
                  {/* <span
                    className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                    onClick={() => deleteFile(logoPreview[0].name)}
                  >
                    <CloseOutlined />
                  </span> */}
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px]">
              Terms and Condition
            </span>
            <p className="text-[#667085] font-medium text-[12px]">
              Add Terms and Conditions
            </p>
          </Col>
          <Col lg={12} xs={24}>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName border-2"
              editorClassName="editorClassName"
              onEditorStateChange={(state) => {
                setEditorState(state)
              }}
              toolbar={toolbarOptions}
            />
            <Form.Item
              name="termsAndConditions"
              rules={[
                {
                  required: true,
                  message: 'Terms and Condition is required',
                },
              ]}
            >
              <Input type="hidden" />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex gap-[20px] justify-end pt-[35px]">
          <Button
            className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
            onClick={prev}
          >
            <span>Back</span>
          </Button>
          <Button
            className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
            // disabled={current === steps.length - 1}
            //   onClick={onFinish}
            htmlType="submit"
            loading={
              createProjectStepThree.loading || updateProjectStepThree.loading
            }
          >
            <span>Next</span>
            <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
          </Button>
        </div>
      </Form>
    </>
  )
}

export default BuilderInfoStep
