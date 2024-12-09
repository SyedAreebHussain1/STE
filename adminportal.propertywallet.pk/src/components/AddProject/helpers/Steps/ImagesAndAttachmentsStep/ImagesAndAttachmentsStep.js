import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Divider, Form, Row } from 'antd'
import Upload from '../../../../../utils/components/Upload/Upload'
import { useUpload } from '../../../../../utils/hooks/useUpload'
import { CloseOutlined } from '@ant-design/icons'
import ArrowRight from '../../../../assest/icon/arrow-right.png'
import { getError } from '../../../../../utils/baseApi'
import { useSelector, useDispatch } from 'react-redux'
import {
  createProjectStepTwoApi,
  deleteProjectPhotoApi,
  getProjectDetailsStepTwoApi,
  updateProjectStepTwoApi,
} from '../../../../../redux/api/Project'
import { formatBytes } from '../../../../../utils/utils'
import DocumentPreviewer from '../../../../../utils/components/Upload/DocumentPreviewer'

const ImagesAndAttachmentsStep = ({ current, next, prev }) => {
  const [masterImages, setMasterImages, imagePreviews, deleteMasterFile] =
    useUpload()
  const [legalPdf, setLegalPdf, pdfPreviews, deleteFile, , filesCountLegal] =
    useUpload()
  const [
    projectImages,
    setProjectImages,
    projectImagesPreviews,
    deleteProjectImages,
    ,
    filesCountProject,
  ] = useUpload()
  const [alreadySubmittedFiles, setAlreadySubmittedFiles] = useState([])
  const createProjectStepTwo = useSelector(
    (state) => state.createProjectStepTwo
  )
  const updateProjectStepTwo = useSelector(
    (state) => state.updateProjectStepTwo
  )
  const createProjectStepOne = useSelector(
    (state) => state.createProjectStepOne
  )
  const getProjectDetailsStepTwo = useSelector(
    (state) => state.getProjectDetailsStepTwo
  )
  const dispatch = useDispatch()

  function onFinish() {
    if (masterImages.length === 0) {
      getError('Select Master Plan')
      return
    }
    const formData = new FormData()

    if (createProjectStepTwo?.data === null) {
      formData.append('masterPlan', masterImages[0])
      const tempNameArr = []
      for (let i = 0; i < legalPdf.length; i++) {
        formData.append(`legalDocument`, legalPdf[i])
        tempNameArr.push(legalPdf[i].name)
      }
      for (let i = 0; i < projectImages.length; i++) {
        formData.append(`projectPhoto`, projectImages[i])
        tempNameArr.push(projectImages[i].name)
      }
      setAlreadySubmittedFiles((prev) => [...prev, ...tempNameArr])
      formData.append(
        'propertyWalletProjectId',
        createProjectStepOne?.data?.data?.id
      )
      createProjectStepTwoApi(dispatch, formData, onSuccess)
    } else {
      if (getProjectDetailsStepTwo?.data?.data?.masterPlan === null) {
        formData.append('master', masterImages[0])
      }

      const tempNameArr = []
      for (let i = 0; i < legalPdf.length; i++) {
        if (alreadySubmittedFiles.includes(legalPdf[i].name)) {
          continue
        }
        formData.append(`legalDocument`, legalPdf[i])
        tempNameArr.push(legalPdf[i].name)
      }
      for (let i = 0; i < projectImages.length; i++) {
        if (alreadySubmittedFiles.includes(projectImages[i].name)) {
          continue
        }
        formData.append(`projectPhoto`, projectImages[i])
        tempNameArr.push(projectImages[i].name)
      }
      setAlreadySubmittedFiles((prev) => [...prev, ...tempNameArr])
      updateProjectStepTwoApi(
        dispatch,
        formData,
        onSuccess,
        createProjectStepOne?.data?.data?.id
      )
    }
  }
  function onSuccess() {
    next()
  }
  useEffect(() => {
    if (current === 1) {
      getProjectDetailsStepTwoApi(
        dispatch,
        createProjectStepOne?.data?.data?.id
      )
    }
  }, [current])
  function deletePhotos(id, type) {
    const body = {
      propertyWalletProjectId: createProjectStepOne?.data?.data?.id,
      type: type,
    }
    if (type !== 'MASTERPLAN') {
      body.photoId = id
    }
    deleteProjectPhotoApi(dispatch, body, onSuccessDelete)
  }
  function onSuccessDelete(projectId) {
    getProjectDetailsStepTwoApi(dispatch, projectId)
  }
  // useEffect(() => {
  //     if (current === 2 || current === 0) {
  //         setProjectImages([])
  //         setLegalPdf([])
  //     }
  // }, [current])
  useEffect(() => {
    if (current === 1) {
      filesCountProject.setState(projectImages.length)
      filesCountLegal.setState(legalPdf.length)
    }
  }, [projectImages, legalPdf])
  return (
    <>
      <Form
        name="project-step-one"
        className="projects-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px]">
              Master Plan
            </span>
            <p className="text-[#667085] font-medium text-[12px]">
              Upload the master plan of your Inventory
            </p>
          </Col>
          <Col lg={8} xs={24}>
            <Upload
              name="masterImages"
              files={masterImages}
              setFiles={setMasterImages}
              supportedFileTypes={['png', 'jpg', 'jpeg']}
              supportedText={'Files Supported  JPG,JPEG,PNG'}
              //   fileLimit={1}
              fileName="MASTERIMAGE"
              disabled={
                getProjectDetailsStepTwo?.data?.data?.masterPlan !== null ||
                masterImages.length > 0
              }
            />
          </Col>
          <Col lg={8} xs={24}>
            <div className="" style={{ alignItems: '' }}>
              {imagePreviews.length > 0 && (
                <div className="relative w-fit">
                  <img
                    src={imagePreviews[0].url}
                    alt=""
                    className="h-[185px] object-contain"
                  />
                  <span
                    className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                    onClick={() => {
                      deleteMasterFile(imagePreviews[0].name)
                      deletePhotos(null, 'MASTERPLAN')
                    }}
                  >
                    <CloseOutlined />
                  </span>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px]">
              Project Images
            </span>
            <p className="text-[#667085] font-medium text-[12px]">
              Upload the images of your inventory
            </p>
          </Col>
          <Col lg={8} xs={24}>
            <Upload
              name="projectImages"
              files={projectImages}
              setFiles={setProjectImages}
              supportedFileTypes={['png', 'jpg', 'jpeg']}
              supportedText={'Files Supported  JPG,JPEG,PNG'}
              //   fileLimit={1}
              multiple
              fileName="PROJECTPHOTO"
              fileUploadLimit={5}
              filesCount={filesCountProject}
            />
          </Col>
          <Col lg={8} xs={24}>
            <div className="flex flex-wrap gap-2" style={{ alignItems: '' }}>
              {getProjectDetailsStepTwo?.data?.data?.propertyWalletProjectPhoto
                ?.length > 0
                ? getProjectDetailsStepTwo?.data?.data?.propertyWalletProjectPhoto?.map(
                    (photo, i) => (
                      <div className="relative w-[25%]" key={i}>
                        <img
                          src={photo.photo}
                          alt=""
                          className="h-[85px] object-contain"
                        />
                        <span
                          className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                          onClick={() => {
                            deleteProjectImages(photo.photo.split('/').at(-1))
                            deletePhotos(photo.id, 'PROJECTPHOTO')
                          }}
                        >
                          <CloseOutlined />
                        </span>
                      </div>
                    )
                  )
                : projectImagesPreviews.length > 0 &&
                  projectImagesPreviews.map((img, i) => (
                    <div className="relative w-[25%]" key={i}>
                      <img
                        src={img.url}
                        alt=""
                        className="h-[85px] object-contain"
                      />
                      <span
                        className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                        onClick={() => deleteProjectImages(img.name)}
                      >
                        <CloseOutlined />
                      </span>
                    </div>
                  ))}
              {getProjectDetailsStepTwo?.data?.data?.propertyWalletProjectPhoto
                ?.length > 0 &&
                projectImagesPreviews
                  ?.filter((img) => !alreadySubmittedFiles.includes(img.name))
                  .map((img, i) => (
                    <div className="relative w-[25%]" key={i}>
                      <img
                        src={img.url}
                        alt=""
                        className="h-[85px] object-contain"
                      />
                      <span
                        className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                        onClick={() => deleteProjectImages(img.name)}
                      >
                        <CloseOutlined />
                      </span>
                    </div>
                  ))}
            </div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px]">
              Project Attachments
              <span className="text-[#858D9D] text-[12px]">(Optional)</span>
            </span>
            <p className="text-[#667085] font-medium text-[12px]">
              Provide the legal documents of your property
            </p>
          </Col>
          <Col lg={8} xs={24}>
            <Upload
              name="legalPdf"
              files={legalPdf}
              setFiles={setLegalPdf}
              supportedFileTypes={['pdf', 'jpg', 'jpeg', 'png']}
              supportedText={'Files Supported PDF, JPG, JPEG, PNG'}
              multiple={true}
              //   fileLimit={1}
              fileUploadLimit={5}
              filesCount={filesCountLegal}
            />
          </Col>
          <Col lg={8} xs={24}>
            <div
              style={{ alignItems: '' }}
              className="max-h-[369px] overflow-y-auto"
            >
              {getProjectDetailsStepTwo?.data?.data
                ?.propertyWalletProjectDocument?.length > 0
                ? getProjectDetailsStepTwo?.data?.data?.propertyWalletProjectDocument.map(
                    (val, i) => (
                      <DocumentPreviewer
                        key={i}
                        fileName={val.doc?.split('/').at(-1).split('-')[1]}
                        fileSize={formatBytes(val.size)}
                        onClick={() => {
                          deletePhotos(val.id, 'LEGALDOCUMENT')
                          deleteFile(val.doc.split('/').at(-1))
                        }}
                      />
                    )
                  )
                : pdfPreviews.length > 0 &&
                  pdfPreviews?.map((val, i) => (
                    <DocumentPreviewer
                      key={i}
                      fileName={val.name?.split('-')[1]}
                      fileSize={formatBytes(val.size)}
                      onClick={() => {
                        deleteFile(val.name)
                      }}
                    />
                  ))}
              {getProjectDetailsStepTwo?.data?.data
                ?.propertyWalletProjectDocument?.length > 0 &&
                pdfPreviews
                  ?.filter((doc) => !alreadySubmittedFiles.includes(doc.name))
                  .map((val, i) => (
                    <DocumentPreviewer
                      key={i}
                      fileName={val.name?.split('-')[1]}
                      fileSize={formatBytes(val.size)}
                      onClick={() => {
                        deleteFile(val.name)
                      }}
                    />
                  ))}
            </div>
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
              createProjectStepTwo.loading || updateProjectStepTwo.loading
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

export default ImagesAndAttachmentsStep
