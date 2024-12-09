import { Button, Col, Divider, Form, Modal, Row, Select } from 'antd'
import InputLabel from '../../../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../../../utils/components/InputFields/TextField'
import NumberField from '../../../../../../utils/components/InputFields/NumberField'
import {
  calculateAmount,
  calculatePercentage,
  formatBytes,
} from '../../../../../../utils/utils'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { createPropertyWalletProductStep3SaveTempleteApi } from '../../../../../../redux/api/SingleProperty'
import CheckboxField from '../../../../../../utils/components/InputFields/CheckboxField'
import { errorMessage } from '../../../../../../utils/message'
import { useSelector } from 'react-redux'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons'

import { useForm } from 'antd/es/form/Form'
import { SelectField } from '../../../../../../utils/components/InputFields/SelectField'
import { useUpload } from '../../../../../../utils/hooks/useUpload'
import Upload from '../../../../../../utils/components/Upload/Upload'
import pdfIcon from '../../../../../assest/icon/pdfIcon.png'
import { uploadTemplatePdfApi } from '../../../../../../redux/api/Project/ProjectInventory'
import { clearUploadTemplatePdf } from '../../../../../../redux/slices/Project/ProjectInventory/uploadTemplatePdfSlice'
import CustomTokenAmount from '../../../../../../utils/components/PaymentPlan/CustomTokenAmount'

const AddNewTemplateModalAddInventory = ({
  visible,
  toggleAdd,
  tokenPayment,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [legalPdf, setLegalPdf, pdfPreviews, deleteFile, , filesCountLegal] =
    useUpload()
  const dispatch = useDispatch()
  const [form] = useForm()
  // const [templateCheck, setTemplateCheck] = useState(false)
  const createPrice = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const updatePrice = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const uploadTemplatePdf = useSelector((state) => state.uploadTemplatePdf)
  const sellingPrice =
    updatePrice?.data?.data?.price || createPrice?.data?.data?.price
  let [element, setElement] = useState([])
  const [percentages, setPercentages] = useState({})
  let [isBalloon, setIsBalloon] = useState(false)
  const [fields, setFields] = useState(false)
  let [ballonAtDisable, setBallonAtDisable] = useState(true)

  const [state, setState] = useState({
    discountAmount: 0,
    OnBookingAmount: 0,
    installmentAmount: 0,
    OnPossessionAmount: 0,
    BalloonAmount: 0,
  })
  const [body, setBody] = useState({
    propertyWalletProductId: '',
    createPropertyWalletProductInstallmentPaymentPlanDto: {
      plan: '',
      token: 0,
      title: '',
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
      propertyWalletProductId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
    })
  }, [updatePrice, createPrice])
  useEffect(() => {
    // if (state.discountAmount > 0) {
    const totalAmountToSubtract = state.discountAmount
    form.setFieldValue('minimumPrice', sellingPrice - totalAmountToSubtract)
    form.setFieldValue('token', tokenPayment)
    setBallonAtDisable(true)

    if (visible === false) {
      setBody({
        createPropertyWalletProductInstallmentPaymentPlanDto: {
          noOfMonths: [],
        },
      })
    }
    // }
  }, [state.discountAmount, visible])

  useEffect(() => {
    form.setFieldValue('sellingPrice', sellingPrice)
  }, [visible, sellingPrice])
  useEffect(() => {
    let array = []
    for (
      let index = 1;
      index <=
      body.createPropertyWalletProductInstallmentPaymentPlanDto.noOfMonths;
      index++
    ) {
      array.push(index)
    }
    setElement(array)
  }, [body.createPropertyWalletProductInstallmentPaymentPlanDto.noOfMonths])
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
      propertyWalletProductId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
      createPropertyWalletProductInstallmentPaymentPlanDto: {
        plan: e.plan,
        title: e.title,
        tokenAmount: selectedOptions.map((item) => Number(item)),
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
      },
    }
    if (isBalloon) {
      body.createPropertyWalletProductInstallmentPaymentPlanDto.BalloonPercentage =
        Number(e.BalloonPercentage)
      body.createPropertyWalletProductInstallmentPaymentPlanDto.BalloonAmount =
        Number(e.BalloonAmount)
      body.createPropertyWalletProductInstallmentPaymentPlanDto.BalloonAt =
        Number(e.BalloonAt)
      body.createPropertyWalletProductInstallmentPaymentPlanDto.balloonIndex =
        e.balloonIndex
    }
    let sum = 0
    const obj = e
    // for (const property in obj) {
    //     if (property.includes('Percentage') && property !== 'discountPercentage' && property !== 'commissionPercentage' && ) {
    //         sum += Number(obj[property])
    //     }
    // }
    for (const property in body.createPropertyWalletProductInstallmentPaymentPlanDto) {
      if (
        property.includes('Percentage') &&
        property !== 'discountPercentage' &&
        property !== 'commissionPercentage' &&
        property !== 'spCommissionPercentage' &&
        property !== 'lgCommissionPercentage'
      ) {
        sum +=
          body.createPropertyWalletProductInstallmentPaymentPlanDto[property]
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
    createPropertyWalletProductStep3SaveTempleteApi(dispatch, body, onSuccess)
    setBody({
      createPropertyWalletProductInstallmentPaymentPlanDto: {
        noOfMonths: null,
      },
    })
    setIsBalloon(false)
    deleteFile(pdfPreviews?.[0]?.name)
    form.resetFields()
    setFields(false)
    setBallonAtDisable(true)
  }
  function onSuccess() {
    toggleAdd()
    setBallonAtDisable(true)
    form.resetFields()
    setIsBalloon(false)
    setFields(false)
    deleteFile(pdfPreviews?.[0]?.name)
    dispatch(clearUploadTemplatePdf())
    setBody({
      createPropertyWalletProductInstallmentPaymentPlanDto: {
        noOfMonths: null,
      },
    })
    setState({
      discountAmount: 0,
      OnBookingAmount: 0,
      installmentAmount: 0,
      OnPossessionAmount: 0,
      BalloonAmount: 0,
    })
  }

  function onCancel() {
    toggleAdd()
    setFields(false)
    setBallonAtDisable(true)
    setBody({
      createPropertyWalletProductInstallmentPaymentPlanDto: {
        noOfMonths: null,
      },
    })
    deleteFile(pdfPreviews?.[0]?.name)
    dispatch(clearUploadTemplatePdf())

    setPercentages({})
    form.resetFields()
    setFields(false)
    setIsBalloon(false)

    setState({
      discountAmount: 0,
      OnBookingAmount: 0,
      installmentAmount: 0,
      OnPossessionAmount: 0,
      BalloonAmount: 0,
    })
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
        <h3 className="text-[18px] font-semibold">Add Installment Template</h3>
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
                      createPropertyWalletProductInstallmentPaymentPlanDto: {
                        ...body.createPropertyWalletProductInstallmentPaymentPlanDto,
                        plan: e.target.value,
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
                      createPropertyWalletProductInstallmentPaymentPlanDto: {
                        ...body.createPropertyWalletProductInstallmentPaymentPlanDto,
                        startingMonth: e.target.value,
                      },
                    })
                  }
                  name="startingMonth"
                />
              </Col>

              <Col lg={8} xs={24}>
                <InputLabel>No of Months</InputLabel>
                <NumberField
                  onChange={(e) => {
                    setBody({
                      ...body,
                      createPropertyWalletProductInstallmentPaymentPlanDto: {
                        ...body.createPropertyWalletProductInstallmentPaymentPlanDto,
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
                  name="productLegalPdfAdd"
                  files={legalPdf}
                  setFiles={setLegalPdf}
                  supportedFileTypes={['pdf', 'jpg', 'jpeg', 'png']}
                  supportedText={'Files Supported PDF, JPG, JPEG, PNG'}
                  // multiple={true}
                  // fileLimit={1}
                  fileUploadLimit={5}
                  filesCount={filesCountLegal}
                />
              </Col>
              <Col>
                {pdfPreviews.length > 0 &&
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
                  // )}
                  onChange={(e) => {
                    // setRenderComponent(e)
                    setPercentages({})

                    if (e === 'balloon') {
                      setBallonAtDisable(true)
                      setFields(true)
                      setIsBalloon(true)
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
                      setBallonAtDisable(true)
                      setFields(true)
                      form.setFieldsValue({
                        OnBookingPercentage: null,
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        OnPossessionPercentage: null,
                        installmentAmount: null,
                        installmentPercentage: null,
                        BalloonAt: null,
                        balloonIndex: [],
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
                            // OnBookingPercentage: null,
                            // OnBookingAmount: null,
                            // installmentPercentage: null,
                            // installmentAmount: null,
                            // OnPossessionPercentage: null,
                            // OnPossessionAmount: null,
                            // BalloonPercentage: null,
                            // BalloonAmount: null,
                            BalloonAt: null,
                            balloonIndex: [],
                          })
                        } else {
                          // form.setFieldsValue({
                          //   // OnBookingPercentage: null,
                          //   // OnBookingAmount: null,
                          //   // installmentPercentage: null,
                          //   // installmentAmount: null,
                          //   // OnPossessionPercentage: null,
                          //   // OnPossessionAmount: null,
                          // });
                          setIsBalloon(false)
                        }
                      }}
                      placeholder="Percentage"
                      name="discountPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={18}>
                    <NumberField
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
                          setFields(true)
                          form.setFieldsValue({
                            // OnBookingPercentage: null,
                            // OnBookingAmount: null,
                            // installmentPercentage: null,
                            // installmentAmount: null,
                            // OnPossessionPercentage: null,
                            // OnPossessionAmount: null,
                            // BalloonPercentage: null,
                            // BalloonAmount: null,
                            BalloonAt: null,
                            balloonIndex: [],
                          })
                        } else {
                          form.setFieldsValue({
                            // OnBookingPercentage: null,
                            // OnBookingAmount: null,
                            // installmentPercentage: null,
                            // installmentAmount: null,
                            // OnPossessionPercentage: null,
                            // OnPossessionAmount: null,
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
              <div>
                <Row gutter={16}>
                  <Col xs={24} lg={12}>
                    <InputLabel>Commission</InputLabel>
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
                          // commissionAmount: calculatedAmount,
                          spCommissionPercentage: Number(e.target.value),
                        }))
                      }}
                      placeholder="Percentage"
                      name="spCommissionPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={24}>
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
                                'sellingPrice'
                                // 'minimumPrice'
                              )
                            ) {
                              e.target.value = form.getFieldValue(
                                'sellingPrice'
                                // 'minimumPrice'
                              )
                              form.setFieldValue(
                                'OnBookingAmount',
                                e.target.value
                              )
                            }
                            form.setFieldsValue({
                              OnBookingPercentage: calculatePercentage(
                                form.getFieldValue(
                                  'sellingPrice'
                                  // 'minimumPrice'
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
                                'sellingPrice'
                                // 'minimumPrice'
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
                                'sellingPrice'
                                // 'minimumPrice'
                              )
                            ) {
                              e.target.value = form.getFieldValue(
                                'sellingPrice'
                                // 'minimumPrice'
                              )
                              form.setFieldValue(
                                'installmentAmount',
                                e.target.value
                              )
                            }
                            const calculatedAmount = calculatePercentage(
                              form.getFieldValue(
                                'sellingPrice'
                                // 'minimumPrice'
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
                                'sellingPrice'
                                // 'minimumPrice'
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
                                'sellingPrice'
                                // 'minimumPrice'
                              )
                            ) {
                              e.target.value = form.getFieldValue(
                                'sellingPrice'
                                // 'minimumPrice'
                              )
                              form.setFieldValue(
                                'OnPossessionAmount',
                                e.target.value
                              )
                            }
                            const calculatedAmount = calculatePercentage(
                              form.getFieldValue(
                                'sellingPrice'
                                // 'minimumPrice'
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
                {/* <Row gutter={16}>
                            <Col xs={24} lg={24}>
                                <CheckboxField
                                    name={'isBaloon'}
                                    onChange={(e) =>
                                        setIsBalloon(e.target.checked)
                                    }
                                    // onChange={(e) => setBody({
                                    //     ...body,
                                    //     createPropertyWalletProductInstallmentPaymentPlanDto: {
                                    //         ...body.createPropertyWalletProductInstallmentPaymentPlanDto,
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
                {/* {body?.createPropertyWalletProductInstallmentPaymentPlanDto?.isBaloon ? <Row gutter={10}> */}
                {isBalloon ? (
                  <Row gutter={10}>
                    <Col xs={24} lg={12}>
                      <InputLabel>Ballon Payment</InputLabel>
                      <Row gutter={10}>
                        <Col xs={24} lg={8}>
                          <NumberField
                            placeholder="Percentage"
                            onChange={(e) => {
                              if (Number(e.target.value) > 100) {
                                e.target.value = 100
                                form.setFieldValue(
                                  'BalloonPercentage',
                                  e.target.value
                                )
                              }
                              const calculatedAmount = calculateAmount(
                                form.getFieldValue(
                                  'sellingPrice'
                                  // 'minimumPrice'
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
                                  'sellingPrice'
                                  // 'minimumPrice'
                                )
                              ) {
                                e.target.value = form.getFieldValue(
                                  'sellingPrice'
                                  // 'minimumPrice'
                                )
                                form.setFieldValue(
                                  'BalloonAmount',
                                  e.target.value
                                )
                              }
                              const calculatedAmount = calculatePercentage(
                                form.getFieldValue(
                                  'sellingPrice'
                                  // 'minimumPrice'
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
                                createPropertyWalletProductInstallmentPaymentPlanDto:
                                  {
                                    ...body.createPropertyWalletProductInstallmentPaymentPlanDto,
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
                              mode="multiple"
                              size="large"
                              disabled={ballonAtDisable}
                              allowClear
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
                                    createPropertyWalletProductInstallmentPaymentPlanDto:
                                      {
                                        ...body.createPropertyWalletProductInstallmentPaymentPlanDto,
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
