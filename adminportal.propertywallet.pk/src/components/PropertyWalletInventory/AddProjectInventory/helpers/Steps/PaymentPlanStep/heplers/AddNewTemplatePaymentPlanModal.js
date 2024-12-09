import React, { useEffect, useState } from 'react'
import { Button, Col, Divider, Form, Modal, Select, Row } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../utils/components/InputFields/NumberField'
import CheckboxField from '../../../../../../../utils/components/InputFields/CheckboxField'
import pdfIcon from '../../../../../../assest/icon/pdfIcon.png'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import TextField from '../../../../../../../utils/components/InputFields/TextField'
import {
  calculateAmount,
  calculatePercentage,
  formatBytes,
} from '../../../../../../../utils/utils'
import { errorMessage } from '../../../../../../../utils/message'
import {
  createPropertyWalletInventoryStep3SaveTempleteApi,
  uploadTemplatePdfApi,
} from '../../../../../../../redux/api/Project/ProjectInventory'
import { SelectField } from '../../../../../../../utils/components/InputFields/SelectField'
import Upload from '../../../../../../../utils/components/Upload/Upload'
import { useUpload } from '../../../../../../../utils/hooks/useUpload'
import { clearUploadTemplatePdf } from '../../../../../../../redux/slices/Project/ProjectInventory/uploadTemplatePdfSlice'
import CustomTokenAmount from '../../../../../../../utils/components/PaymentPlan/CustomTokenAmount'

const AddNewTemplateModalAddInventory = ({
  visible,
  toggleAdd,
  tokenPayment,
}) => {
  const [legalPdf, setLegalPdf, pdfPreviews, deleteFile, , filesCountLegal] =
    useUpload()
  const dispatch = useDispatch()
  const [form] = useForm()
  const createPrice = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updatePrice = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const uploadTemplatePdf = useSelector((state) => state.uploadTemplatePdf)

  const [selectedOptions, setSelectedOptions] = useState([])

  const sellingPrice =
    updatePrice?.data?.data?.price || createPrice?.data?.data?.price
  let [element, setElement] = useState([])
  const [percentages, setPercentages] = useState({})
  const [fields, setFields] = useState(false)
  let [isBalloon, setIsBalloon] = useState(false)
  let [ballonAtDisable, setBallonAtDisable] = useState(true)

  const [state, setState] = useState({
    discountAmount: 0,
    OnBookingAmount: 0,
    installmentAmount: 0,
    OnPossessionAmount: 0,
    BalloonAmount: 0,
  })
  const [body, setBody] = useState({
    propertyWalletInventoryId: '',
    createPropertyWalletInstallmentPaymentPlanDto: {
      token: 0,
      title: '',
      plan: '',
      noOfMonths: 0,
      discountAmount: 0,
      discountPercentage: 0,
      commissionPercentage: 0,
      spCommissionPercentage: 0,
      lgCommissionPercentage: 0,
      // commissionAmount: 0,
      OnBookingPercentage: 0,
      OnBookingAmount: 0,
      installmentPercentage: 0,
      installmentAmount: 0,
      OnPossessionPercentage: 0,
      OnPossessionAmount: 0,
      isBaloon: isBalloon,
      BalloonPercentage: 0,
      BalloonAmount: 0,
      BalloonAt: 0,
      balloonIndex: '',
      minimumPrice: 0,
    },
  })
  useEffect(() => {
    setBody({
      ...body,
      propertyWalletInventoryId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
    })
  }, [updatePrice, createPrice])
  useEffect(() => {
    const totalAmountToSubtract = state.discountAmount
    form.setFieldValue('minimumPrice', sellingPrice - totalAmountToSubtract)
    form.setFieldValue('token', tokenPayment)
    setBallonAtDisable(true)
  }, [state.discountAmount, visible, createPrice, updatePrice])
  useEffect(() => {
    form.setFieldValue('sellingPrice', sellingPrice)
  }, [visible, sellingPrice])
  useEffect(() => {
    let array = []
    for (
      let index = 1;
      index <= body.createPropertyWalletInstallmentPaymentPlanDto.noOfMonths;
      index++
    ) {
      array.push(index)
    }
    setElement(array)
  }, [body.createPropertyWalletInstallmentPaymentPlanDto.noOfMonths])

  useEffect(() => {
    const formData = new FormData()
    if (legalPdf.length > 0) {
      formData.append(`pdf`, legalPdf[0])
      uploadTemplatePdfApi(dispatch, formData)
    }
  }, [legalPdf])

  const onFinish = (e) => {
    if (selectedOptions.length === 0) {
      errorMessage('Select atleast 1 token amount')
      return
    }
    const body = {
      propertyWalletInventoryId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
      createPropertyWalletInstallmentPaymentPlanDto: {
        tokenAmount: selectedOptions.map((item) => Number(item)),
        plan: e.plan,
        title: e.title,
        url: uploadTemplatePdf?.data?.data,
        noOfMonths:
          e.plan === 'quarterly'
            ? Number(Math.round(e.noOfMonths / 3))
            : Number(e.noOfMonths),
        discountAmount: Number(e.discountAmount),
        discountPercentage: Number(e.discountPercentage),
        commissionPercentage: Number(e.commissionPercentage),
        spCommissionPercentage: Number(e.spCommissionPercentage),
        lgCommissionPercentage: Number(e.lgCommissionPercentage),
        OnBookingPercentage: Number(e.OnBookingPercentage),
        OnBookingAmount: Number(e.OnBookingAmount),
        installmentPercentage: Number(e.installmentPercentage),
        installmentAmount: Number(e.installmentAmount),
        OnPossessionPercentage: Number(e.OnPossessionPercentage),
        OnPossessionAmount: Number(e.OnPossessionAmount),
        isBaloon: isBalloon,
        minimumPrice: Number(e.minimumPrice),
        installmentStartDuration: e.startingMonth,
        agentCommissiion: e.agentCommissiion,
        freeLancerCommissiion: e.freeLancerCommissiion,
        agentELoungeSaleCommissiion: e.agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion: e.freelancerELoungeSaleCommissiion,
        // outdoorComission: e.outdoorComission,
        extraCommissiion: e.extraCommissiion,
        agencyIncrementCommission: e.consecutive,
        freeLancerExtraCommissiion: e.flextc,
        premiumAgencyExtraCommissiion: e.paextc,
        eloungeOtherCommission: e.eloungeOtherCommission,
        outdoorAgencyEloungeComission: Number(e.outdoorAgencyEloungeComission),
        outdoorFreelancerEloungeComission: Number(
          e.outdoorFreelancerEloungeComission
        ),
        outdoorPremiumAgencyEloungeComission: Number(
          e.outdoorPremiumAgencyEloungeComission
        ),
        agencyIncrementTimeLimit: Number(e.agencyIncrementTimeLimit),
        premiumAgencyIncrementCommission: Number(
          e.premiumAgencyIncrementCommission
        ),
        premiumAgencyIncrementTimeLimit: Number(
          e.premiumAgencyIncrementTimeLimit
        ),
        freeLancerIncrementCommission: Number(e.freeLancerIncrementCommission),
        freeLancerIncrementTimeLimit: Number(e.freeLancerIncrementTimeLimit),
      },
    }
    if (isBalloon) {
      body.createPropertyWalletInstallmentPaymentPlanDto.BalloonPercentage =
        Number(e.BalloonPercentage)
      body.createPropertyWalletInstallmentPaymentPlanDto.BalloonAmount = Number(
        e.BalloonAmount
      )
      body.createPropertyWalletInstallmentPaymentPlanDto.BalloonAt = Number(
        e.BalloonAt
      )
      body.createPropertyWalletInstallmentPaymentPlanDto.balloonIndex =
        e.balloonIndex
    }
    let sum = 0
    const obj = e
    for (const property in body.createPropertyWalletInstallmentPaymentPlanDto) {
      if (
        property.includes('Percentage') &&
        property !== 'discountPercentage' &&
        property !== 'commissionPercentage' &&
        property !== 'spCommissionPercentage' &&
        property !== 'lgCommissionPercentage'
      ) {
        sum += body.createPropertyWalletInstallmentPaymentPlanDto[property]
      }
    }
    if (sum < 100 || sum > 100) {
      errorMessage('Percentage should equal to 100')
      return
    }
    if (legalPdf.length !== 1) {
      errorMessage('Document is req')
      return
    }
    createPropertyWalletInventoryStep3SaveTempleteApi(
      dispatch,
      body,
      onSuccessTemp
    )
  }
  function onSuccessTemp() {
    toggleAdd()
    setBody({
      createPropertyWalletInstallmentPaymentPlanDto: {
        noOfMonths: null,
      },
    })
    form.resetFields()
    setIsBalloon(false)
    setState({
      discountAmount: 0,
      OnBookingAmount: 0,
      installmentAmount: 0,
      OnPossessionAmount: 0,
      BalloonAmount: 0,
    })
    setFields(false)
    setBallonAtDisable(true)

    deleteFile(pdfPreviews?.[0]?.name)
  }

  function onCancel() {
    toggleAdd()
    form.resetFields()
    setState({
      discountAmount: 0,
    })
    dispatch(clearUploadTemplatePdf())
    setPercentages({})
    setFields(false)
    setBallonAtDisable(true)
    deleteFile(pdfPreviews?.[0]?.name)
    setBody({
      createPropertyWalletInstallmentPaymentPlanDto: {
        noOfMonths: null,
      },
    })

    setIsBalloon(false)
  }

  useEffect(() => {
    if (Object.keys(percentages).length === 2 && !isBalloon) {
      const fieldsPer = []
      for (const key in form.getFieldsValue()) {
        if (
          key === 'commissionPercentage' ||
          key === 'discountPercentage' ||
          key === 'spCommissionPercentage' ||
          key === 'lgCommissionPercentage'
        ) {
          continue
        }
        if (key.includes('Percentage')) {
          fieldsPer.push(key)
        }
      }
      let sum = 0
      for (const key in percentages) {
        sum += Number(percentages[key])
      }
      for (let i = 0; i < fieldsPer.length; i++) {
        if (!Object.keys(percentages).includes(fieldsPer[i])) {
          if (sum >= 100) {
            form.setFieldValue(fieldsPer[i], 0)
            form.setFieldValue(
              fieldsPer[i].split('Percentage')[0] + 'Amount',
              0
            )
            return
          }
          form.setFieldValue(fieldsPer[i], 100 - sum)
          form.setFieldValue(
            fieldsPer[i].split('Percentage')[0] + 'Amount',
            calculateAmount(form.getFieldValue('sellingPrice'), 100 - sum)
          )
        }
      }
    }
    if (Object.keys(percentages).length === 3 && isBalloon) {
      const fieldsPer = []
      for (const key in form.getFieldsValue()) {
        if (
          key === 'commissionPercentage' ||
          key === 'discountPercentage' ||
          key === 'spCommissionPercentage' ||
          key === 'lgCommissionPercentage'
        ) {
          continue
        }
        if (key.includes('Percentage')) {
          fieldsPer.push(key)
        }
      }
      let sum = 0
      for (const key in percentages) {
        sum += Number(percentages[key])
      }
      for (let i = 0; i < fieldsPer.length; i++) {
        if (!Object.keys(percentages).includes(fieldsPer[i])) {
          if (sum >= 100) {
            form.setFieldValue(fieldsPer[i], 0)
            form.setFieldValue(
              fieldsPer[i].split('Percentage')[0] + 'Amount',
              0
            )
            return
          }
          form.setFieldValue(fieldsPer[i], 100 - sum)
          form.setFieldValue(
            fieldsPer[i].split('Percentage')[0] + 'Amount',
            calculateAmount(form.getFieldValue('sellingPrice'), 100 - sum)
          )
        }
      }
    }
  }, [percentages])

  return (
    <Modal
      width={'817px'}
      title={
        <h3 className="text-[18px] font-semibold">Add Instalment Template</h3>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }} bordered={false}>
          <Form
            name="normal_login"
            form={form}
            // className="login-form"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Row gutter={16}>
              <Col lg={8} xs={24}>
                <InputLabel>Template Name</InputLabel>
                <TextField
                  onChange={(e) =>
                    setBody({
                      ...body,
                      createPropertyWalletInstallmentPaymentPlanDto: {
                        ...body.createPropertyWalletInstallmentPaymentPlanDto,
                        title: e.target.value,
                      },
                    })
                  }
                  placeholder="Title"
                  name="title"
                />
              </Col>

              <Col lg={8} xs={24}>
                <InputLabel>Starting Month</InputLabel>
                <NumberField
                  onChange={(e) =>
                    setBody({
                      ...body,
                      createPropertyWalletInstallmentPaymentPlanDto: {
                        ...body.createPropertyWalletInstallmentPaymentPlanDto,
                        startingMonth: e.target.value,
                      },
                    })
                  }
                  name="startingMonth"
                />
              </Col>
              <Col lg={6} xs={24}>
                <InputLabel>No of Months</InputLabel>
                <NumberField
                  onChange={(e) => {
                    setBody({
                      ...body,
                      createPropertyWalletInstallmentPaymentPlanDto: {
                        ...body.createPropertyWalletInstallmentPaymentPlanDto,
                        noOfMonths: Number(e.target.value),
                      },
                    })
                    if (e) {
                      form.setFieldsValue({
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                      setBallonAtDisable(true)
                    }
                  }}
                  name="noOfMonths"
                />
              </Col>
            </Row>
            <Row gutter={16} className="mb-[10px]">
              <Col lg={12} xs={24}>
                <div className="mb-[10px]">
                  {' '}
                  <InputLabel>Document</InputLabel>
                </div>
                <Upload
                  name="pdf"
                  files={legalPdf}
                  setFiles={setLegalPdf}
                  // multiple={true}
                  // fileLimit={1}
                  supportedFileTypes={['pdf', 'jpg', 'jpeg', 'png']}
                  supportedText={'Files Supported PDF, JPG, JPEG, PNG'}
                  fileUploadLimit={5}
                  filesCount={filesCountLegal}
                />
              </Col>
              <Col>
                {uploadTemplatePdf.data &&
                  pdfPreviews?.map((val, i) => (
                    <div className="flex bg-white h-full relative overflow-hidden file-container-pdf  mb-3">
                      <div className="flex bg-[white] p-[16px] gap-3 items-center w-full">
                        <div>
                          <img src={pdfIcon} alt="" />
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <div>
                            <h4 className="font-semibold text-sm">
                              {val.name?.split('-')[1]}
                            </h4>
                            <p className="text-sm text-[#949494]">
                              {formatBytes(val.size)}
                            </p>
                          </div>
                          <div className="cursor-pointer">
                            <span
                              className=""
                              onClick={() => {
                                deleteFile(val.name)
                              }}
                            >
                              <CloseOutlined />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={24} xs={24}>
                <InputLabel>Plan</InputLabel>
                <SelectField
                  name="plan"
                  required
                  options={[
                    {
                      value: 'monthly',
                      label: 'Monthly',
                    },
                    {
                      value: 'quarterly',
                      label: 'Quarterly',
                    },
                    {
                      value: 'balloon',
                      label: 'Balloon',
                    },
                  ]}
                  onChange={(e) => {
                    setPercentages({})
                    if (e === 'balloon') {
                      setFields(true)
                      setIsBalloon(true)
                      setBallonAtDisable(true)
                      form.setFieldsValue({
                        OnBookingPercentage: null,
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        OnPossessionPercentage: null,
                        installmentAmount: null,
                        installmentPercentage: null,
                        BalloonPercentage: null,
                        BalloonAmount: null,
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                    } else {
                      setFields(true)
                      setBallonAtDisable(true)
                      form.setFieldsValue({
                        OnBookingPercentage: null,
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        OnPossessionPercentage: null,
                        installmentAmount: null,
                        installmentPercentage: null,
                        BalloonAt: null,
                        balloonIndex: [],
                        BalloonPercentage: null,
                        BalloonAmount: null,
                      })
                      setIsBalloon(false)
                    }
                  }}
                />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} lg={24}>
                <InputLabel>Discount</InputLabel>
                <Row gutter={16}>
                  <Col xs={24} lg={6}>
                    <NumberField
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'discountPercentage',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculateAmount(
                          sellingPrice,
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          discountAmount: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          discountAmount: calculatedAmount,
                          discountPercentage: Number(e.target.value),
                        }))
                        if (isBalloon) {
                          setIsBalloon(true)
                          setFields(true)

                          form.setFieldsValue({
                            // OnBookingPercentage:
                            //     null,
                            // OnBookingAmount: null,
                            // installmentPercentage:
                            //     null,
                            // // plan: null,
                            // installmentAmount: null,
                            // OnPossessionPercentage:
                            //     null,
                            // OnPossessionAmount:
                            //     null,
                            // BalloonPercentage: null,
                            // BalloonAmount: null,
                            BalloonAt: null,
                            balloonIndex: [],
                          })
                        } else {
                          form.setFieldsValue({
                            // OnBookingPercentage:
                            //     null,
                            // // plan: null,
                            // OnBookingAmount: null,
                            // installmentPercentage:
                            //     null,
                            // installmentAmount: null,
                            // OnPossessionPercentage:
                            //     null,
                            // OnPossessionAmount:
                            //     null,
                          })
                          setIsBalloon(false)
                        }
                      }}
                      placeholder="Percentage"
                      name="discountPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={18}>
                    <NumberField
                      // onChange={(e) => setBody({ ...body, discountAmount: e.target.value })}
                      onChange={(e) => {
                        if (Number(e.target.value) > sellingPrice) {
                          e.target.value = sellingPrice
                          form.setFieldValue('discountAmount', e.target.value)
                        }
                        form.setFieldsValue({
                          discountPercentage: calculatePercentage(
                            sellingPrice,
                            Number(e.target.value)
                          ),
                        })
                        setState((prev) => ({
                          ...prev,
                          discountAmount: Number(e.target.value),
                        }))
                        if (isBalloon) {
                          form.setFieldsValue({
                            OnBookingPercentage: null,
                            OnBookingAmount: null,
                            installmentPercentage: null,
                            installmentAmount: null,
                            OnPossessionPercentage: null,
                            OnPossessionAmount: null,
                            // plan:
                            //     null,
                            BalloonPercentage: null,
                            BalloonAmount: null,
                            BalloonAt: null,
                            balloonIndex: [],
                          })
                        } else {
                          form.setFieldsValue({
                            OnBookingPercentage: null,
                            OnBookingAmount: null,
                            installmentPercentage: null,
                            // plan: null,
                            installmentAmount: null,
                            OnPossessionPercentage: null,
                            OnPossessionAmount: null,
                          })
                        }
                      }}
                      placeholder="Amount"
                      name="discountAmount"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} lg={12}>
                <InputLabel>Minimum Price</InputLabel>
                <NumberField disabled name="minimumPrice" />
              </Col>
              {/* <Col xs={24} lg={12}>
                <InputLabel>Token Payment</InputLabel>
                <NumberField name="token" />
              </Col> */}
              {/* <Col xs={24} lg={8}>
                                <InputLabel>Selling Price</InputLabel>
                                <NumberField disabled name="sellingPrice" />
                            </Col> */}
            </Row>
            <Row gutter={16}>
              <Col xs={24} lg={24}>
                <CustomTokenAmount
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </Col>
            </Row>
            {fields ? (
              <div style={{ border: '' }} className="border-collapse">
                <InputLabel>
                  <b>For App Users</b>
                </InputLabel>
                <Divider />
                <Row gutter={16}>
                  <Col xs={24} lg={12}>
                    <InputLabel>Sale Point Commission</InputLabel>
                    <NumberField
                      // onChange={(e) => setBody({ ...body, commissionPercentage: e.target.value })}
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'spCommissionPercentage',
                            e.target.value
                          )
                        }
                        // const calculatedAmount = calculateAmount(
                        //   sellingPrice,
                        //   Number(e.target.value)
                        // );
                        // form.setFieldsValue({
                        //   commissionAmount: calculatedAmount,
                        // });
                        setState((prev) => ({
                          ...prev,
                          //   commissionAmount: calculatedAmount,
                          spCommissionPercentage: Number(e.target.value),
                        }))
                      }}
                      placeholder="Percentage"
                      name="spCommissionPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Lounges Commission</InputLabel>
                    <NumberField
                      // onChange={(e) => setBody({ ...body, commissionPercentage: e.target.value })}
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'lgCommissionPercentage ',
                            e.target.value
                          )
                        }
                        // const calculatedAmount = calculateAmount(
                        //   sellingPrice,
                        //   Number(e.target.value)
                        // );
                        // form.setFieldsValue({
                        //   commissionAmount: calculatedAmount,
                        // });
                        setState((prev) => ({
                          ...prev,
                          // commissionAmount: calculatedAmount,
                          lgCommissionPercentage: Number(e.target.value),
                        }))
                      }}
                      placeholder="Percentage"
                      name="lgCommissionPercentage"
                    />
                  </Col>
                  {/* <Col xs={24} lg={12}>
                    <InputLabel>Agent Commission</InputLabel>
                    <NumberField
                      name="agentCommissiion"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue('agentCommissiion', e.target.value)
                        }
                      }}
                    />
                  </Col> */}

                  {/* <Col xs={24} lg={12}>
                    <InputLabel>Agent E-Lounge Commission</InputLabel>
                    <NumberField
                      name="agentELoungeSaleCommissiion"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'agentELoungeSaleCommissiion',
                            e.target.value
                          )
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>
                      Freelancer E-Lounge Sale Commissiion
                    </InputLabel>
                    <NumberField
                      name="freelancerELoungeSaleCommissiion"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'freelancerELoungeSaleCommissiion',
                            e.target.value
                          )
                        }
                      }}
                    />
                  </Col> */}
                  {/* <Col xs={24} lg={12}>
                    <InputLabel>Outdoor Comission</InputLabel>
                    <NumberField
                      name="outdoorComission"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue('outdoorComission', e.target.value)
                        }
                      }}
                    />
                  </Col> */}
                  <Col xs={24} lg={12}>
                    <InputLabel>Agency Commission</InputLabel>

                    <NumberField
                      // onChange={(e) => setBody({ ...body, commissionPercentage: e.target.value })}
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'commissionPercentage',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculateAmount(
                          sellingPrice,
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          commissionAmount: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          commissionAmount: calculatedAmount,
                          commissionPercentage: Number(e.target.value),
                        }))
                      }}
                      placeholder="Percentage"
                      name="commissionPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Agency extra Commission</InputLabel>
                    <NumberField
                      name="extraCommissiion"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue('extraCommissiion', e.target.value)
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Premium agency extra Commission</InputLabel>
                    <NumberField
                      name="paextc"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue('paextc', e.target.value)
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Freelancer Commission</InputLabel>
                    <NumberField
                      name="freeLancerCommissiion"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'freeLancerCommissiion',
                            e.target.value
                          )
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Freelancer extra Commission</InputLabel>
                    <NumberField
                      name="flextc"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue('flextc', e.target.value)
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Consecutive Commission</InputLabel>
                    <NumberField
                      name="consecutive"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue('consecutive', e.target.value)
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Agency Increment Time Limit</InputLabel>
                    <NumberField name="agencyIncrementTimeLimit" />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Premium Agency Increment Commission</InputLabel>
                    <NumberField name="premiumAgencyIncrementCommission" />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Premium Agency Increment TimeLimit</InputLabel>
                    <NumberField name="premiumAgencyIncrementTimeLimit" />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>FreeLancer Increment Commission</InputLabel>
                    <NumberField name="freeLancerIncrementCommission" />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>FreeLancer Increment Time Limit</InputLabel>
                    <NumberField name="freeLancerIncrementTimeLimit" />
                  </Col>
                </Row>
                <InputLabel>
                  <b>For ELounge Users</b>
                </InputLabel>
                <Divider />
                <Row gutter={16}>
                  <Col xs={24} lg={12}>
                    <InputLabel>Agent E-Lounge Commission</InputLabel>
                    <NumberField
                      name="agentELoungeSaleCommissiion"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'agentELoungeSaleCommissiion',
                            e.target.value
                          )
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>
                      Freelancer E-Lounge Sale Commissiion
                    </InputLabel>
                    <NumberField
                      name="freelancerELoungeSaleCommissiion"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'freelancerELoungeSaleCommissiion',
                            e.target.value
                          )
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>Elounge other Commission</InputLabel>
                    <NumberField
                      name="eloungeOtherCommission"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'eloungeOtherCommission',
                            e.target.value
                          )
                        }
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel> Outdoor Agency Elounge Comission</InputLabel>
                    <NumberField
                      name="outdoorAgencyEloungeComission"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'outdoorAgencyEloungeComission',
                            e.target.value
                          )
                        }
                        // setState((prev) => ({
                        //   ...prev,
                        //   outdoorAgencyEloungeComission: Number(e.target.value),
                        // }))
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>
                      {' '}
                      Outdoor Freelacner Elounge Comission
                    </InputLabel>
                    <NumberField
                      name="outdoorFreelancerEloungeComission"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'outdoorFreelancerEloungeComission',
                            e.target.value
                          )
                        }
                        // setState((prev) => ({
                        //   ...prev,
                        //   outdoorFreelacnerEloungeComission: Number(
                        //     e.target.value
                        //   ),
                        // }))
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>
                      {' '}
                      Outdoor Premium Agency Elounge Comission
                    </InputLabel>
                    <NumberField
                      name="outdoorPremiumAgencyEloungeComission"
                      placeholder="Percentage"
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'outdoorPremiumAgencyEloungeComission',
                            e.target.value
                          )
                        }
                        // setState((prev) => ({
                        //   ...prev,
                        //   outdoorPremiumAgencyEloungeComission: Number(
                        //     e.target.value
                        //   ),
                        // }))
                      }}
                    />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={24} lg={24}>
                    <InputLabel>On Booking</InputLabel>
                    <Row gutter={16}>
                      <Col xs={24} lg={6}>
                        <NumberField
                          // onChange={(e) => setBody({ ...body, OnBookingPercentage: e.target.value })}
                          placeholder="Percentage"
                          name="OnBookingPercentage"
                          onChange={(e) => {
                            setPercentages((prev) => ({
                              ...prev,
                              OnBookingPercentage: e.target.value,
                            }))
                            if (Number(e.target.value) > 100) {
                              e.target.value = 100
                              form.setFieldValue(
                                'OnBookingPercentage',
                                e.target.value
                              )
                            }
                            const calculatedAmount = calculateAmount(
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              ),
                              Number(e.target.value)
                            )
                            form.setFieldsValue({
                              OnBookingAmount: calculatedAmount,
                            })
                            setState((prev) => ({
                              ...prev,
                              OnBookingAmount: calculatedAmount,
                              OnBookingPercentage: Number(e.target.value),
                            }))
                          }}
                        />
                      </Col>
                      <Col xs={24} lg={18}>
                        <NumberField
                          //  onChange={(e) => setBody({ ...body, OnBookingAmount: e.target.value })}
                          onChange={(e) => {
                            if (
                              Number(e.target.value) >
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              )
                            ) {
                              e.target.value = form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              )
                              form.setFieldValue(
                                'OnBookingAmount',
                                e.target.value
                              )
                            }
                            form.setFieldsValue({
                              OnBookingPercentage: calculatePercentage(
                                form.getFieldValue(
                                  // 'minimumPrice'
                                  'sellingPrice'
                                ),
                                Number(e.target.value)
                              ),
                            })
                            setState((prev) => ({
                              ...prev,
                              OnBookingAmount: Number(e.target.value),
                            }))
                          }}
                          placeholder="Amount"
                          name="OnBookingAmount"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={10}>
                  <Col xs={24} lg={12}>
                    <InputLabel>Installment Payment</InputLabel>
                    <Row gutter={10}>
                      <Col xs={24} lg={8}>
                        <NumberField
                          //  onChange={(e) => setBody({ ...body, installmentPercentage: e.target.value })}
                          onChange={(e) => {
                            setPercentages((prev) => ({
                              ...prev,
                              installmentPercentage: e.target.value,
                            }))
                            if (Number(e.target.value) > 100) {
                              e.target.value = 100
                              form.setFieldValue(
                                'installmentPercentage',
                                e.target.value
                              )
                            }
                            const calculatedAmount = calculateAmount(
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              ),
                              Number(e.target.value)
                            )
                            form.setFieldsValue({
                              installmentAmount: calculatedAmount,
                            })
                            setState((prev) => ({
                              ...prev,
                              installmentAmount: calculatedAmount,
                              installmentPercentage: Number(e.target.value),
                            }))
                          }}
                          placeholder="Percentage"
                          name="installmentPercentage"
                        />
                      </Col>
                      <Col xs={24} lg={16}>
                        <NumberField
                          placeholder="Amount"
                          //  onChange={(e) => setBody({ ...body, installmentAmount: e.target.value })}
                          onChange={(e) => {
                            if (
                              Number(e.target.value) >
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              )
                            ) {
                              e.target.value = form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              )
                              form.setFieldValue(
                                'installmentAmount',
                                e.target.value
                              )
                            }
                            const calculatedAmount = calculatePercentage(
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              ),
                              Number(e.target.value)
                            )
                            form.setFieldsValue({
                              installmentPercentage: calculatedAmount,
                            })
                            setState((prev) => ({
                              ...prev,
                              installmentAmount: calculatedAmount,
                            }))
                          }}
                          name="installmentAmount"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} lg={12}>
                    <InputLabel>On Possession</InputLabel>
                    <Row gutter={10}>
                      <Col xs={24} lg={8}>
                        <NumberField
                          placeholder="Percentage"
                          //  onChange={(e) => setBody({ ...body, OnPossessionPercentage: e.target.value })}
                          onChange={(e) => {
                            setPercentages((prev) => ({
                              ...prev,
                              OnPossessionPercentage: e.target.value,
                            }))
                            if (Number(e.target.value) > 100) {
                              e.target.value = 100
                              form.setFieldValue(
                                'OnPossessionPercentage',
                                e.target.value
                              )
                            }
                            const calculatedAmount = calculateAmount(
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              ),
                              Number(e.target.value)
                            )
                            form.setFieldsValue({
                              OnPossessionAmount: calculatedAmount,
                            })
                            setState((prev) => ({
                              ...prev,
                              OnPossessionAmount: calculatedAmount,
                              OnPossessionPercentage: Number(e.target.value),
                            }))
                          }}
                          name="OnPossessionPercentage"
                        />
                      </Col>
                      <Col xs={24} lg={16}>
                        <NumberField
                          placeholder="Amount"
                          onChange={(e) => {
                            if (
                              Number(e.target.value) >
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              )
                            ) {
                              e.target.value = form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              )
                              form.setFieldValue(
                                'OnPossessionAmount',
                                e.target.value
                              )
                            }
                            const calculatedAmount = calculatePercentage(
                              form.getFieldValue(
                                // 'minimumPrice'
                                'sellingPrice'
                              ),
                              Number(e.target.value)
                            )
                            form.setFieldsValue({
                              OnPossessionPercentage: calculatedAmount,
                            })
                            setState((prev) => ({
                              ...prev,
                              OnPossessionAmount: calculatedAmount,
                            }))
                          }}
                          name="OnPossessionAmount"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {isBalloon ? (
                  <>
                    {/* <Row gutter={16}>
                                    <Col xs={24} lg={24}>
                                        <CheckboxField
                                            name={'isBaloon'}

                                            onChange={(e) =>
                                                setIsBalloon(e.target.checked)
                                            }
                                            // onChange={(e) => setBody({
                                            //     ...body,
                                            //     createPropertyWalletInstallmentPaymentPlanDto: {
                                            //         ...body.createPropertyWalletInstallmentPaymentPlanDto,
                                            //         isBaloon: e.target.checked,
                                            //     },
                                            // })}
                                            options={[
                                                {
                                                    label: 'Add Ballon Payment',
                                                    value: true,
                                                },
                                            ]}
                                        />
                                    </Col>
                                </Row> */}

                    <Row gutter={10}>
                      <Col xs={24} lg={12}>
                        <InputLabel>Ballon Payment</InputLabel>
                        <Row gutter={10}>
                          <Col xs={24} lg={8}>
                            <NumberField
                              placeholder="Percentage"
                              onChange={(e) => {
                                setPercentages((prev) => ({
                                  ...prev,
                                  BalloonPercentage: e.target.value,
                                }))
                                if (Number(e.target.value) > 100) {
                                  e.target.value = 100
                                  form.setFieldValue(
                                    'BalloonPercentage',
                                    e.target.value
                                  )
                                }
                                const calculatedAmount = calculateAmount(
                                  form.getFieldValue(
                                    // 'minimumPrice'
                                    'sellingPrice'
                                  ),
                                  Number(e.target.value)
                                )
                                form.setFieldsValue({
                                  BalloonAmount: calculatedAmount,
                                })
                                setState((prev) => ({
                                  ...prev,
                                  BalloonAmount: calculatedAmount,
                                  BalloonPercentage: Number(e.target.value),
                                }))
                              }}
                              name="BalloonPercentage"
                            />
                          </Col>
                          <Col xs={24} lg={16}>
                            <NumberField
                              placeholder="Amount"
                              onChange={(e) => {
                                if (
                                  Number(e.target.value) >
                                  form.getFieldValue(
                                    // 'minimumPrice'
                                    'sellingPrice'
                                  )
                                ) {
                                  e.target.value = form.getFieldValue(
                                    // 'minimumPrice'
                                    'sellingPrice'
                                  )
                                  form.setFieldValue(
                                    'BalloonAmount',
                                    e.target.value
                                  )
                                }
                                const calculatedAmount = calculatePercentage(
                                  form.getFieldValue(
                                    // 'minimumPrice'
                                    'sellingPrice'
                                  ),
                                  Number(e.target.value)
                                )
                                form.setFieldsValue({
                                  BalloonPercentage: calculatedAmount,
                                })
                                setState((prev) => ({
                                  ...prev,
                                  BalloonAmount: calculatedAmount,
                                }))
                              }}
                              name="BalloonAmount"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24} lg={12}>
                        <InputLabel>Ballon At</InputLabel>
                        <Row gutter={10}>
                          <Col xs={24} lg={8}>
                            <NumberField
                              placeholder="Months"
                              onChange={(e) => {
                                setBody({
                                  ...body,
                                  createPropertyWalletInstallmentPaymentPlanDto:
                                    {
                                      ...body.createPropertyWalletInstallmentPaymentPlanDto,
                                      BalloonAt: e.target.value,
                                    },
                                })
                                if (e.target.value > 0) {
                                  setBallonAtDisable(false)
                                } else {
                                  setBallonAtDisable(true)
                                  form.setFieldsValue({
                                    balloonIndex: [],
                                  })
                                }
                              }}
                              name="BalloonAt"
                            />
                          </Col>
                          <Col xs={24} lg={16}>
                            <Form.Item
                              name="balloonIndex"
                              rules={[
                                {
                                  required: true,
                                  message: 'Title is required',
                                },
                              ]}
                              className="h-[auto] mt-[3%]"
                            >
                              <Select
                                disabled={ballonAtDisable}
                                mode="multiple"
                                allowClear
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="Balloon At"
                                options={element?.map((val) => ({
                                  label: val,
                                  value: val,
                                }))}
                                onChange={(e) => {
                                  if (
                                    e.length > form.getFieldValue('BalloonAt')
                                  ) {
                                    e.pop()
                                  } else {
                                    setBody({
                                      ...body,
                                      createPropertyWalletInstallmentPaymentPlanDto:
                                        {
                                          ...body.createPropertyWalletInstallmentPaymentPlanDto,
                                          balloonIndex: e,
                                        },
                                    })
                                  }
                                }}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            <div className="flex justify-end mt-[30px] gap-2">
              <Button
                size="middle"
                key="1"
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-white text-black h-[40px]"
                // htmlType="submit"
                onClick={onCancel}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="2"
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                Add Template
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default AddNewTemplateModalAddInventory
